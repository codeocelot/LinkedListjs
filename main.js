function List(){
	/* Constructor
	 */
	List.makeNode = function(){
		return {data:null,next:null};
	}

	this.start=null;
	this.end=null;

	/*
	 * Add
	 *  Adds a new node containing data to the end of the list
	 */
	this.add = (data)=>{
		if(this.start===null){
			this.start=List.makeNode();
			this.end=this.start;
		}
		else{
			this.end.next = new List.makeNode();
			this.end = this.end.next;
		}
		this.end.data = data;
	}

	/*
	 * Inserts a new node at the front of the list
	 */
	this.insertAsFirst = (data)=>{
		var t = new List.makeNode();
		t.data = data;
		t.next = this.start;
		this.start = t;
	}

	/*
	 *	PrintList
	 *	 prints the list for debugging purposes
	 */
	this.printList = ()=>{
		var current = this.start;
		var i = 0
		console.log(i,': ',current.data);
		while(current.next){
			current = current.next;
			i++;
			console.log(i,': ',current.data);
		}
	}

	/*
	 * InsertAfter
	 *  inserts after the node containing ref
	 */
	this.insertAfter = (ref,data)=>{
		var current = this.start;
		// case when inserting after first node
		if(current.data === ref){
			var temp = new List();
			temp.data = data;
			temp.next = current.next;
			current.next = temp;

		}
		else if(this.end.data === ref){
			// inserting after the end
			var temp = new List();
			temp.data = data;
			this.end.next = temp
			this.end = temp
		}
		else{
			while(current.data !== ref){
				current = current.next;
			}
			var temp = new List();
			temp.data = data;
			temp.next = current.next;
			current.next = temp;
		}
	}

	/*
	 * Delete
	 *  Delete the node containing data
	 */
	this.delete = (data)=>{
		if(this.start.data === data){
			// first element to be deleted
			this.start = this.start.next;
		}
		else{
			var current = this.start;
			while(current.next.data !== data){
				current = current.next
			}
			if(current.next === this.end){
				this.end = current;
			}
			else{
				current.next = current.next.next;
			}
		}
	}

	/*
	 * Get
	 * 	Returns node at index 
	 */
	this.get = (i) =>{
		var current = this.start;
		while(i !==0){
			if(!current.next){throw new Error('could not find');}
			current = current.next;			
			i--;
		}
		return current;
	}

	/*
	 * Each
	 * 	Does fn to each in the list
	 */
	this.each = (fn) =>{
		var current = this.start;
		while(current){
			fn(current.data);
			current=current.next;
		}
	}

	/*
	 * Map: 
	 * 	returns a *new* element with the fn done to each element
	 */ 
	this.map = (fn) =>{
		var newLL = Object.assign({},this);//fuck you I won't polyfill es5 
		var current = newLL.start;
		while(current){
			current.data = fn(current.data);
			current=current.next;
		}
		newLL.printList();
		return newLL;
	}
}

module.exports = List
