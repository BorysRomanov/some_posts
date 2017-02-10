import { test } from 'qunit';
import moduleForAcceptance from 'some-posts/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('should redirect to about', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should redirect automatically');
  });
});
