(function() {

  function itTestsForAnInstanceOfNews() {
    let news = new News();
    assert.isTrue(news instanceof News);
    console.log("News can be instantiated -- Code GREEN");
  }; itTestsForAnInstanceOfNews();

  






})(this);