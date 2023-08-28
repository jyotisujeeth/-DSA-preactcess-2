// Implement Stack using Queues
////////////////////////////////////////////Push///////////////////////////
private Queue<Integer> q1 = new LinkedList<>();
private Queue<Integer> q2 = new LinkedList<>();
private int top;

// Push element x onto stack.
public void push(int x) {
    q1.add(x);
    top = x;
}
////////////////////////////////////////////////////////////////////////////////////////////
public void push(int x) {
    q2.add(x);
    top = x;
    while (!q1.isEmpty()) {                
        q2.add(q1.remove());
    }
    Queue<Integer> temp = q1;
    q1 = q2;
    q2 = temp;
}
////////////////////////////////////////////////pop/////////////////////////////////////////
// Removes the element on top of the stack.
public void pop() {
    while (q1.size() > 1) {
        top = q1.remove();
        q2.add(top);
    }
    q1.remove();
    Queue<Integer> temp = q1;
    q1 = q2;
    q2 = temp;
}
//////////////////////////////////////////////////////////////////////////
// Removes the element on top of the stack.
public void pop() {
    q1.remove();
    if (!q1.isEmpty()) {
    	top = q1.peek();
    }
}
////////////////////////////////////////////Top/////////////////////////////////
// Get the top element.
public int top() {
    return top;
}
//////////////////////////////////////////////////////////////
// Get the top element.
public int top() {
    return q1.peek();
}
//////////////////////////////////////////////////////////////////////////////
class MyStack {
	
	private Queue<Integer> queue = new LinkedList<>();

	public void push(int x) {
		queue.add(x);
		for(int i = 1;i<queue.size();i++) {
			queue.add(queue.remove());
		}
	}

	public int pop() {
		return queue.remove();
	}

	public int top() {
		return queue.peek();
	}

	public boolean empty() {
		return queue.isEmpty();  
	}
	}
////////////////////////////////////////////////////////////////////////////////////////
// Get the top element.
public int top() {
    return q1.peek();
}
/** Removes the element on top of the stack and returns that element. */
    public int pop() {
        int theTop = top;
        while(queue.size() > 1) {
            top = queue.remove();
            queue2.add(top);   
        }
        queue.remove();
        Queue<Integer> temp = queue;
        queue = queue2;
        queue2 = temp;
        return theTop;
    }

