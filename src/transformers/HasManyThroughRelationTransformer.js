import Utils from '../Utils';
import RelationTransformer from './RelationTransformer';

export default class extends RelationTransformer {
  transform(data, output) {
    this.constructor.checkMany(data);

    let expectedType = this.relation.related.entity;

    /*
     * This is not expected to return normally. See this caveat:
     * `https://vuex-orm.org/guide/data/inserting-and-updating.html#generating-pivot-records`.
     */
    output[this.name] = data.map(({type: resourceType, id: _id}) => {
      this.constructor.checkType(this.resourceToEntityCase(resourceType), expectedType);

      throw Utils.error('Writing directly to a `HasManyThrough` relation is not supported');
    });

    return output;
  }
}
