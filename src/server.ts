import { config } from './config/app';

var app = config();

app.listen(process.env.PORT || 3000, () => {
    
});