var faker = require('/home/baraa/.nvm/versions/node/v6.3.0/lib/node_modules/faker');

module.exports = function () {
  var data = { posts: [] }
    // Create 1000 users
  for (var i = 0; i < 1000; i++) {
    data.posts.push({
      id: i,
      title: faker.lorem.words(Math.random() < 0.5 ? 3 : 4),
      status: Math.random() < 0.5 ? true : false,
      auther: faker.name.findName(),
      comments: faker.helpers.replaceSymbolWithNumber("###"),
      date: faker.date.past(),
      url: `/blog/posts/${i}`

    })
  }
  return data
}

