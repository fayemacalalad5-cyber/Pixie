/**
 * Child-friendly audio synthesis using Web Audio API and Speech Synthesis
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private speechEnabled: boolean = true;

  constructor() {
    // AudioContext will be initialized upon user gesture
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private bgmInterval: number | null = null;
  private bgmEnabled: boolean = false;
  private bgmNoteIndex: number = 0;

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public setSpeechEnabled(enabled: boolean) {
    this.speechEnabled = enabled;
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  public isSpeechEnabled(): boolean {
    return this.speechEnabled;
  }

  public isBgmEnabled(): boolean {
    return this.bgmEnabled;
  }

  /**
   * Cozy Whimsical Background Music (BGM) generator
   * Gentle, soft music-box / kalimba lullaby notes on a pentatonic scale
   */
  public startBgm() {
    this.bgmEnabled = true;
    this.initCtx();
    if (this.bgmInterval) return;

    // Gentle fairytale melody notes (Hz): C4, E4, G4, A4, C5, B4, G4, E4, D4, F4, A4, C5
    const melody = [
      261.63, 329.63, 392.0, 440.0, 523.25, 493.88, 392.0, 329.63,
      293.66, 349.23, 440.0, 523.25, 392.0, 329.63, 293.66, 261.63
    ];

    this.bgmInterval = window.setInterval(() => {
      if (!this.bgmEnabled || !this.ctx) return;
      try {
        const freq = melody[this.bgmNoteIndex % melody.length];
        this.bgmNoteIndex++;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Music-box / soft chime tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Very soft unobtrusive volume (0.04)
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0005, this.ctx.currentTime + 0.65);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.65);
      } catch {
        // ignore
      }
    }, 450); // Relaxed, comforting tempo
  }

  public stopBgm() {
    this.bgmEnabled = false;
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }

  public toggleBgm(): boolean {
    if (this.bgmEnabled) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  /**
   * Battle Sound: Pixie Star Blast attack
   */
  public playPlayerAttack() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch {
      // ignore
    }
  }

  /**
   * Battle Sound: Enemy hit sparkle
   */
  public playEnemyHit() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch {
      // ignore
    }
  }

  /**
   * Battle Sound: Boss defeated fanfare
   */
  public playEnemyDefeated() {
    this.playFanfare();
  }

  /**
   * Soft button tap click sound
   */
  public playClick() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  /**
   * Fun bubble pop sound
   */
  public playPop() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // ignore
    }
  }

  /**
   * Cheerful sparkle chime (e.g. For collecting stars or touching the mascot)
   */
  public playSparkle() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.25);
      });
    } catch {
      // ignore
    }
  }

  /**
   * Correct answer cheerful bell
   */
  public playCorrect() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [587.33, 880]; // D5 -> A5
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.1 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.1);
        osc.stop(this.ctx.currentTime + idx * 0.1 + 0.35);
      });
    } catch {
      // ignore
    }
  }

  /**
   * Gentle, encouraging hint boop (no shaming, pleasant soft tone)
   */
  public playGentleRetry() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(349.23, this.ctx.currentTime); // F4
      osc.frequency.exponentialRampToValueAtTime(329.63, this.ctx.currentTime + 0.18); // E4

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch {
      // ignore
    }
  }

  /**
   * Level completion fanfare
   */
  public playFanfare() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const chord = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C major celebratory arpeggio
      chord.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + i * 0.1);
        osc.stop(this.ctx.currentTime + i * 0.1 + 0.5);
      });
    } catch {
      // ignore
    }
  }

  /**
   * Optional speech narration for young learners using the browser's SpeechSynthesis
   */
  public speak(text: string) {
    if (!this.speechEnabled || typeof window === 'undefined') return;
    if (!('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel(); // Stop any pending utterances
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Friendly, slightly slower for kids
      utterance.pitch = 1.25; // Gentle, cheerful pitch

      // Pick an English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
      if (preferred) {
        utterance.voice = preferred;
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // ignore speech errors
    }
  }
}

export const soundFx = new SoundManager();
