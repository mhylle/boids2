import * as fromGene from './gene.actions';

describe('loadGenes', () => {
  it('should return an action', () => {
    expect(fromGene.LoadGenes().type).toBe('[Gene] Load Genes');
  });
});
