const Resource = require('../modules/Resource');

module.exports = function Meta(api) {
    const resource = new Resource(api);
    resource.endpoints({
        query: {
            path: '/tasks/metadata',
            method: 'POST',
        }
    });
    return resource;
};
