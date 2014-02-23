
App.User = DS.Model.extend({
  name: DS.attr('string'),
  display_name: DS.attr('string'),
  comment: DS.attr('string'),
  isSelected: DS.attr('boolean'),
  //expenses: DS.hasMany('expenses')
});

App.User.FIXTURES = [{
  id: '1',
  name: "Vikas",
  display_name: "Vky",
  comment: "Trying to be an engineer",
  isSelected: false
},
{
  id: '2',
  name: "Naresh",
  display_name: "naresh",
  comment: "An engineer",
  isSelected: true
}
];