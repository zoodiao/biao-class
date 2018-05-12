function find_and_delete(arr, element) {
    var shit_index = arr.indexOf(element);

    if (shit_index == -1)
      return false;

    arr.splice(shit_index, 1);
    return true;
  }