import * as React from 'react';
import {SvgXml} from 'react-native-svg';

export const Avatar = ({
  fill,
  width,
  height,
}: {
  fill?: string;
  width?: number; // Change type to number for width and height
  height?: number;
}) => {
  const xml = `<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_426)">
<path d="M12.9898 0C16.4479 0 19.5602 1.40358 21.8181 3.66151C24.0761 5.91945 25.4797 9.05207 25.4797 12.4898C25.4797 15.9479 24.0761 19.0602 21.8181 21.3181C19.5602 23.5761 16.4276 24.9797 12.9898 24.9797C9.55207 24.9797 6.41945 23.5761 4.16151 21.3181C1.90358 19.0806 0.5 15.9479 0.5 12.4898C0.5 9.03173 1.90358 5.91945 4.16151 3.66151C6.41945 1.40358 9.55207 0 12.9898 0ZM8.90114 11.0456C8.67738 11.0456 8.4943 11.1066 8.3926 11.188C8.33157 11.2286 8.27054 11.2897 8.2502 11.3507C8.20952 11.4321 8.18918 11.5134 8.20952 11.6355C8.20952 11.9406 8.37225 12.3474 8.69772 12.8153L9.71481 14.4426C10.1216 15.0936 10.5488 15.7648 11.098 16.2531C11.6066 16.7209 12.2372 17.0464 13.0509 17.0464C13.9459 17.0464 14.5968 16.7209 15.1257 16.2124C15.6749 15.7038 16.1225 14.9919 16.5496 14.2799L17.7091 12.3881C17.9329 11.8999 17.9939 11.5745 17.9532 11.371C17.9329 11.249 17.7905 11.2083 17.5871 11.188C17.5464 11.188 17.4854 11.188 17.4447 11.188C17.3836 11.188 17.343 11.188 17.2819 11.188C17.2413 11.188 17.2209 11.188 17.2006 11.188C17.0989 11.188 16.9972 11.188 16.8751 11.1676L17.2616 9.41823C14.3324 9.88609 12.1355 7.70952 9.04353 8.99105L9.24695 11.0659C9.1249 11.0659 9.00285 11.0659 8.90114 11.0456ZM4.32425 19.467C5.76851 18.9585 8.31123 18.6941 9.49105 17.9007C9.69447 17.6363 9.91823 17.3108 10.1216 17.026C10.2437 16.843 10.3454 16.6802 10.4471 16.5582C10.4675 16.5378 10.4878 16.5175 10.5081 16.4972C10.0199 15.9886 9.6131 15.3784 9.22661 14.7681L8.20952 13.1408C7.82303 12.5712 7.61961 12.0627 7.61961 11.6558C7.61961 11.4524 7.63995 11.2693 7.72132 11.1269C7.80268 10.9642 7.92474 10.8218 8.06713 10.7201C8.14849 10.6794 8.22986 10.6184 8.31123 10.598C8.2502 9.72335 8.22986 8.60456 8.27055 7.66884C8.29089 7.44508 8.33157 7.22132 8.3926 6.99756C8.65704 6.06184 9.30797 5.30919 10.1216 4.80065C10.4064 4.61758 10.7116 4.47518 11.0574 4.35313C11.6473 4.12937 11.3625 3.23434 12.0134 3.21399C13.5391 3.17331 16.0411 4.47518 17.0175 5.53295C17.5871 6.14321 17.9532 6.95688 18.0142 8.03499L17.9532 10.6998C18.238 10.7811 18.4211 10.9642 18.5024 11.249C18.5838 11.5745 18.5024 12.022 18.2177 12.6526C18.2177 12.6729 18.1973 12.6729 18.1973 12.6932L17.0378 14.6054C16.5903 15.3377 16.1225 16.0903 15.5122 16.6599L15.4919 16.6802C15.5732 16.7819 15.6546 16.904 15.736 17.026C15.8987 17.2498 16.0614 17.5142 16.2445 17.7583C17.3226 18.6737 20.1705 18.9585 21.6758 19.5077C23.2217 17.5956 24.1371 15.1546 24.1371 12.5102C24.1371 9.43857 22.8963 6.65175 20.8824 4.63792C18.8686 2.62408 16.0818 1.38324 13.0102 1.38324C9.93857 1.38324 7.15175 2.62408 5.13792 4.63792C3.12408 6.65175 1.88324 9.43857 1.88324 12.5102C1.8629 15.1343 2.77828 17.5549 4.32425 19.467ZM16.1631 18.4093C15.8784 18.0838 15.5936 17.6566 15.3291 17.2905C15.2478 17.1888 15.1867 17.0667 15.1054 16.9854C14.5561 17.3922 13.8849 17.6566 13.0102 17.6566C12.0948 17.6566 11.3828 17.3312 10.7929 16.8226C10.7929 16.8226 10.7929 16.843 10.7726 16.843C10.6709 16.9854 10.5692 17.1277 10.4471 17.3108C10.2234 17.6363 9.97925 17.9821 9.75549 18.2872C9.77583 20.3417 14.963 21.5622 16.1631 18.4093Z" fill="#A7A3B3"/>
</g>
<defs>
<clipPath id="clip0_1_426">
<rect width="25" height="25" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
`;

  return <SvgXml xml={xml} width="100%" height="100%" />;
};
