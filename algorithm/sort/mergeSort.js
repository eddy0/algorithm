

const mergeSort = (array) => {
    // base case
    if (array.length < 2) {
        return array
    }
    const length = array.length
    let mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    
}


// A1B2C3D4 -> ABCD1234
/*
                A1B2C3D4
            A1B2        C3D4
          A 1 B 2      C 3 D 4
            AB12        CD34
               ABCD1234
 */