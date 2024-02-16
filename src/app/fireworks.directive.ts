import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import Fireworks from 'fireworks';

@Directive({
  selector: '[appFireworks]'
})
export class FireworksDirective implements OnInit{

  private fireworks: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.fireworks = new (Fireworks as any)({
      target: this.elementRef.nativeElement,
      hue: 120,
      startDelay: 1,
      minDelay: 20,
      maxDelay: 30,
      speed: 5,
      gravity: 5,
      colors: ['#ffffff'],
      maxRockets: 5,
      rocketSpawnInterval: 150,
      numParticles: 100,
      explosionMinHeight: 0.2,
      explosionMaxHeight: 0.9,
      explosionChance: 0.08,
      explosionParticleMinSpeed: 1,
      explosionParticleMaxSpeed: 10,
      explosionParticleColor: ['#ffffff'],
      explosionParticleBaseAlpha: 0.4,
      clearAlpha: 0.25,
      context: document.createElement('canvas').getContext('2d')
    });

    this.fireworks.start();
  }

}