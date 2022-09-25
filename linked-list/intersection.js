function intersection(list1, list2) {
  let result = new LinkedList();

  let t1 = list1.getHead();
  let t2 = list2.getHead();

  while (t1 != null) {
    while (t2 != null) {
      if (t1.data == t2.data) {
        result.insertAtHead(t1.data);
      }
      t2 = t2.nextElement;
    }
    t2 = list2.getHead();
    t1 = t1.nextElement;
  }
  result.removeDuplicates();
  return result;
}
