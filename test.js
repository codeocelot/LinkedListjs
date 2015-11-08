var List = require('./main.js');
var assert = require('assert');

function testAdd(){
	var ll = new List();
	for(var i = 0; i< 10; i++){
		ll.add(i);
	}
	var current= ll.start;
	for(var i =0;i<10;i++){
		current = current.next
	}
	return ll;
}

function testDelete(){
	var ll = testAdd();
	// delete first element
	ll.delete(0);
	assert.equal(ll.start.data,1)
	// delete non-first element
	ll.delete(2);
	assert.equal(ll.start.next.data,3);

	// delete from the end
	ll.delete(9);
	assert.equal(ll.end.data,8);
}

function testInsertAfter(){
	var ll = testAdd();
	ll.insertAfter(0,'n');
	assert.equal(ll.start.next.data,'n');
	assert.equal(ll.start.data,0);
	assert.equal(ll.start.next.next.data,1);

	// case: insert in the middle somewhere
	ll.insertAfter('n','nn');
	assert.equal(ll.start.next.data,'n');
	assert.equal(ll.start.next.next.data,'nn');

	// case: insert at the end.
	ll.insertAfter(9,'nnn');
	assert.equal(ll.end.data,'nnn');
}

function testGet(){
	var ll = testAdd();
	assert.equal(ll.get(0).data,0);
	assert.equal(ll.get(5).data,5);
	assert.equal(ll.get(9).data,9);
}

function testEach(){
	function addOne(i){
		return ++i;
	}
	var ll = testAdd();
	ll.each(addOne);
	assert.equal(ll.get(0).data,1);
	assert.equal(ll.get(6).data,7);
	assert.equal(ll.get(9).data,10);
}

testInsertAfter();
testAdd();
testDelete();
testGet();
testEach()
