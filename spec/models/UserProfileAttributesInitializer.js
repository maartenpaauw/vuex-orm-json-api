export default class {
  static initialize({user_profile_attributes, user_profiles}) {
    user_profile_attributes.entity = 'user_profile_attributes';

    user_profile_attributes.fields = function () {
      return {
        id: this.attr(null),

        user_profile_id: this.attr(null),
        user_profile: this.belongsTo(user_profiles, 'user_profile_id'),
      };
    };
  }
}
