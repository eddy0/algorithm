class ArrayList {
    constructor(){
        this.data = {}
        this.length = 0
    }

    push(value) {
        this.data[this.length] = value
        this.length++
    }

    pop() {
        const ans = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return ans
    }

    get(index) {
        return this.data[index]
    }

    delete(index) {
        const ans = this.data[index]
        this._collapseTo(index)
        return ans
    }

    _collapseTo(index) {
        for (var i = index; i < this.data.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        // last one will be undefined,  需要删除
        // this.data[length] = undefined
        delete this.data[this.length - 1]
        this.length--
    }

}
