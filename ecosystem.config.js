export default {
    apps:[
        {
            name:"ha",
            script:"ls",
            args:"artisan serve --host=0.0.0.0 --port=8000",
            exec_mode:'fork',
            watch:false,
            autostart:true
        }
    ]
}