// Efectos de sonido sintetizados con Web Audio: no hay archivos de audio.
// El navegador solo deja sonar tras un clic o una tecla, así que todo es silencioso hasta entonces.
(function (root) {
  "use strict";

  var ctx = null, master = null, hush = null, on = true, unlocked = false, lastHover = 0;

  function unlock() {
    if (unlocked) return;
    var A = root.AudioContext || root.webkitAudioContext;
    if (!A) return;
    try {
      ctx = new A();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
      // un segundo de ruido blanco que reutilizan todos los efectos de arena y tierra
      hush = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      var d = hush.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      unlocked = true;
    } catch (e) { ctx = null; }
  }

  function ready() {
    if (!unlocked || !on || !ctx) return false;
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }

  function tone(f, d, type, v, when, f2) {
    if (!ready()) return;
    var t = ctx.currentTime + (when || 0), o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + d + 0.03);
  }

  function noise(d, v, when, kind, f, f2) {
    if (!ready()) return;
    var t = ctx.currentTime + (when || 0), s = ctx.createBufferSource(), flt = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = hush; s.loop = true;
    flt.type = kind; flt.Q.value = 1.2;
    flt.frequency.setValueAtTime(f, t);
    if (f2) flt.frequency.exponentialRampToValueAtTime(f2, t + d);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    s.connect(flt); flt.connect(g); g.connect(master);
    s.start(t, Math.random() * 0.5); s.stop(t + d + 0.03);
  }

  var NOTES = [523, 659, 784, 1047, 1319, 1568];

  var SFX = {
    unlock: unlock,
    setOn: function (v) { on = !!v; },
    isOn: function () { return on; },

    click: function () { tone(440, 0.05, "square", 0.12); tone(660, 0.07, "square", 0.12, 0.045); },
    hover: function () {
      var n = Date.now();
      if (n - lastHover < 70) return;
      lastHover = n;
      tone(1300, 0.025, "square", 0.025);
    },
    key: function () { tone(230 + Math.random() * 170, 0.03, "square", 0.035); },
    tick: function () { tone(1000, 0.04, "square", 0.08); },

    // el corgi se clava y rasca la tierra durante un segundo
    dig: function () {
      tone(300, 0.14, "triangle", 0.16, 0, 90);
      for (var i = 0; i < 6; i++) {
        var t = 0.12 + i * 0.13;
        noise(0.09, 0.26, t, "bandpass", 1500 + (i % 2) * 700, 600);
        tone(130, 0.08, "triangle", 0.12, t, 60);
      }
      noise(0.45, 0.14, 0.55, "lowpass", 2400, 300);
      noise(0.18, 0.18, 0.9, "highpass", 1200);
    },

    // lo que encuentra: cuanto más raro, más largo y brillante
    found: function (tier) {
      var i;
      if (tier <= 0) { tone(200, 0.2, "triangle", 0.22, 0, 110); noise(0.14, 0.1, 0, "lowpass", 600); return; }
      for (i = 0; i <= Math.min(tier, 4); i++) tone(NOTES[i], 0.18, "square", 0.1, i * 0.075);
      if (tier >= 2) tone(NOTES[Math.min(tier, 4)], 0.45, "triangle", 0.12, (Math.min(tier, 4) + 1) * 0.075);
      if (tier >= 3) for (i = 0; i < 5; i++) tone(1900 + i * 330, 0.1, "sine", 0.05, 0.1 + i * 0.07);
      if (tier >= 4) noise(0.5, 0.05, 0.1, "highpass", 5000);
      if (tier >= 5) {
        [784, 1047, 1319, 1568].forEach(function (f, k) { tone(f, 0.5, "triangle", 0.1, 0.42 + k * 0.01); });
        tone(262, 0.7, "square", 0.08, 0.42);
        for (i = 0; i < 8; i++) tone(2400 + i * 260, 0.08, "sine", 0.04, 0.5 + i * 0.06);
      }
    },

    miss: function () {
      tone(170, 0.16, "sawtooth", 0.12, 0, 120);
      tone(150, 0.22, "sawtooth", 0.12, 0.17, 90);
    },

    done: function (good, record) {
      var seq = good ? [523, 659, 784, 1047] : [392, 349, 311, 262], i;
      for (i = 0; i < seq.length; i++) tone(seq[i], 0.22, good ? "square" : "triangle", 0.1, i * 0.12);
      if (good) tone(1047, 0.6, "triangle", 0.1, 0.5);
      if (record) for (i = 0; i < 6; i++) tone(1319 + i * 220, 0.09, "sine", 0.06, 0.65 + i * 0.07);
    }
  };

  root.SFX = SFX;
  ["pointerdown", "keydown"].forEach(function (ev) {
    root.addEventListener(ev, unlock, { once: false, passive: true });
  });
})(typeof window !== "undefined" ? window : globalThis);
