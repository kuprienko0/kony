const createSingletoneLoader = (createInstance, ...args) => {
    let instance = null;
    return {
        getInstance: () => instance || (instance = new createInstance(...args))
    }
}

export default createSingletoneLoader;