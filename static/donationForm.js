$(function() {
    luminateExtend.init({
        apiKey: 'whee',
        path: {
            nonsecure: 'http://172.20.7.182/site/',
            secure: 'https://172.20.7.182/site/'
        }
    });

    luminateExtend.api.bind();
});
