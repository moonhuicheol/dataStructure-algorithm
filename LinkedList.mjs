//연결 리스트의 추상자료형

//1. 모든 데이터 출력   =>  printAll();
//2. 모든 데이터 제거   =>  clear(); 
//3. 원하는 곳에 인덱스 삽입    =>  insertAt(index, data);
//4. 마지막 인덱스 삽입     =>  insertLast(data);     
//5. 원하는 인덱스 삭제     => deleteAt(index);
//6. 마지막 인덱스 삭제     => deleteLast();
//7. 원하는 인덱스 읽기     => getNodeAt(index);

class Node{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null; //연결리스트 첫번째인덱스
        this.count = 0; //연결리스트 길이
    }

    insertAt(index, data) {
        if(index < 0 || index > this.count) {
            throw new Error("범위를 벗어났습니다.");
        }

        let newNode = new Node(data);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for(let i = 0; i < index - 1 ; i++) {
                currentNode = currentNode.next; //삽입할 인덱스의 전 Node까지 이동
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    printAll(){
        let currentNode = this.head;
        let text = "["

        while(currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) {
                text += ", ";
            } 
        }

        text += "]";
        console.log(text);
    }

    clear(){
        this.head = null; 
        //LinkedList는 애초에 head(첫번째 노드에서 next로 인해 연결되므로 첫번째 node를 null하면 연결이 끊킨다.
        //이렇게 되면 다른 데이터들을 참조 할 수 없게 되고, 자바스크립트는 참조할 수 없는 데이터는 메모리에서 제거한다.
        this.count = 0;
    }
    
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if(index < 0 || index >= this.count) {
            throw newError("범위를 벗어 났습니다.");
        }

        let currentNode = this.head;

        if(index === 0){
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        } else {
            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = deleteNode.next; //currentNode.next.next
            this.count--;
            return deleteNode;
        }
    }

    deleteLast(){
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index){
        if(index < 0 || index >= this.count) {
            throw newError("범위를 벗어 났습니다.");
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };