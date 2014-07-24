$(function() {
    // TODO: this shouldn't be hardcoded. That may be OK for demo purposes,
    // but we'll need to adjust these values on different systems
    luminateExtend.init({
        apiKey: 'whee', 
        path: {
            nonsecure: 'http://172.20.7.182/site/', 
            secure: 'https://172.20.7.182/site/'
        }
    });
});