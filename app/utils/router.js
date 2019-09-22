function route(name) {
    eval(`${name}().init()`)
}