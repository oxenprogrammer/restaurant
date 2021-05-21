import '../style/main.scss';

import component from './component';
import okello from '../img/android-chrome-512x512.png';

const img = document.createElement('img');
img.src = okello;

document.body.appendChild(img);
document.body.append(component());