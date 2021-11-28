import * as fromBoid from './boid.actions';

describe('loadBoids', () => {
  it('should return an action', () => {
    expect(fromBoid.LoadBoids().type).toBe('[Boid] Load Boids');
  });
});
