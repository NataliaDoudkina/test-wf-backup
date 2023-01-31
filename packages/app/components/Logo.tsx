import * as React from "react"

import Svg, { G, Path, SvgProps } from "react-native-svg"

const Logo = (props: SvgProps) => {
    return (
        <Svg viewBox="0 0 342 111" style={{height: 100, marginLeft: 50, marginRight: 50}}>
            <G {...props}>
                <Path d="M169.785 18.7545V57.101C169.785 57.7837 169.246 58.3298 168.585 58.3298H164.375C163.709 58.3298 163.176 57.7775 163.176 57.101V18.7545C163.176 18.0719 163.715 17.5258 164.375 17.5258H168.585C169.246 17.5258 169.785 18.0781 169.785 18.7545Z" fill="#F46B5D"/>
                <Path d="M183.778 23.5949L189.563 62.2455C189.635 62.7109 189.32 63.1453 188.866 63.2198L183.978 63.9894C183.523 64.0638 183.099 63.7411 183.027 63.2757L177.242 24.6251C177.169 24.1596 177.484 23.7252 177.938 23.6508L182.827 22.8812C183.281 22.8067 183.711 23.1232 183.778 23.5949Z" fill="#F1562A"/>
                <Path d="M80.637 56.8218C77.2933 56.8218 74.2464 55.9406 71.4963 54.1781C68.7462 52.4156 66.5534 50.0511 64.9179 47.0847C63.2824 44.1182 62.4646 40.8353 62.4646 37.2359C62.4646 34.5052 62.9371 31.9546 63.8821 29.5839C64.827 27.2133 66.1294 25.1281 67.7891 23.3283C69.4489 21.5286 71.3812 20.1199 73.5861 19.1021C75.791 18.0843 78.1413 17.5754 80.637 17.5754C83.375 17.5754 85.8889 18.1402 88.1786 19.2697C90.4683 20.3991 92.4309 21.9692 94.0665 23.98C95.702 25.9907 96.9256 28.3241 97.7373 30.9803C98.4399 33.2827 98.7549 35.7216 98.6883 38.2971C98.6701 38.9673 98.1431 39.5072 97.4889 39.5072H70.4181C69.6548 39.5072 69.0672 40.2395 69.249 40.9967C69.6124 42.5109 70.1939 43.8948 71.0056 45.1484C72.0718 46.7992 73.4347 48.1087 75.0944 49.0768C76.7542 50.0449 78.6017 50.5414 80.637 50.5662C82.8177 50.5662 84.7925 49.9891 86.5612 48.8348C88.112 47.8232 89.4022 46.4827 90.432 44.8133C90.6985 44.3789 91.2134 44.1741 91.704 44.292L95.5929 45.2229C96.3562 45.4091 96.756 46.2903 96.3804 46.9978C94.9569 49.6601 92.9943 51.8881 90.4925 53.6754C87.5547 55.773 84.2715 56.8218 80.637 56.8218ZM70.2182 34.5921H91.0922C91.8434 34.5921 92.4249 33.8909 92.2734 33.1399C91.9584 31.6133 91.3769 30.1921 90.5289 28.8765C89.4143 27.1512 87.9969 25.7673 86.2765 24.7247C84.5562 23.6821 82.6784 23.1608 80.6431 23.1608C78.6078 23.1608 76.7421 23.6697 75.046 24.6874C73.3499 25.7052 71.9506 27.0767 70.8481 28.802C70.0062 30.1176 69.4065 31.5574 69.0551 33.1151C68.8734 33.8722 69.4549 34.5921 70.2182 34.5921Z" fill="#1D878C"/>
                <Path d="M104.443 54.7363V4.84058C104.443 4.22619 104.927 3.72351 105.533 3.72351H133.198C133.797 3.72351 134.288 4.21999 134.288 4.84058V8.86823C134.288 9.48262 133.803 9.9853 133.198 9.9853H111.639C111.039 9.9853 110.549 10.4818 110.549 11.1024V23.6942C110.549 24.3086 111.033 24.8113 111.639 24.8113H129.708C130.308 24.8113 130.799 25.3078 130.799 25.9284V29.956C130.799 30.5704 130.314 31.0731 129.708 31.0731H111.639C111.039 31.0731 110.549 31.5696 110.549 32.1902V54.7363C110.549 55.3507 110.064 55.8534 109.458 55.8534H105.527C104.927 55.8534 104.443 55.3569 104.443 54.7363Z" fill="#FB8F67"/>
                <Path d="M137.953 54.5194V19.9523C137.953 19.2138 138.534 18.618 139.255 18.618H142.763C143.483 18.618 144.065 19.2138 144.065 19.9523C144.065 21.1004 145.367 21.6838 146.227 20.9515C147.045 20.2502 147.948 19.642 148.935 19.1207C150.898 18.0905 153.03 17.5754 155.332 17.5754C156.192 17.5754 157.04 17.6437 157.864 17.7864C158.676 17.923 159.136 18.8166 158.827 19.5986L157.361 23.3097C157.125 23.9117 156.495 24.2406 155.871 24.1041C155.247 23.9738 154.629 23.9055 154.029 23.9055C152.212 23.9055 150.546 24.3585 149.032 25.2646C147.518 26.1707 146.312 27.3932 145.416 28.9323C144.519 30.4714 144.071 32.1842 144.071 34.0708V54.5194C144.071 55.2579 143.489 55.8537 142.769 55.8537H139.261C138.534 55.8537 137.953 55.2579 137.953 54.5194Z" fill="#FB8F67"/>
                <Path d="M209.322 56.8218C205.978 56.8218 202.931 55.9406 200.181 54.1781C197.431 52.4156 195.238 50.0511 193.603 47.0847C191.967 44.1182 191.15 40.8353 191.15 37.2359C191.15 34.5052 191.622 31.9546 192.567 29.5839C193.512 27.2133 194.814 25.1281 196.474 23.3283C198.134 21.5286 200.066 20.1199 202.271 19.1021C204.476 18.0843 206.826 17.5754 209.322 17.5754C212.06 17.5754 214.574 18.1402 216.864 19.2697C219.153 20.3991 221.116 21.9692 222.751 23.98C224.387 25.9907 225.611 28.3241 226.422 30.9803C227.131 33.2951 227.446 35.7464 227.373 38.3467C227.355 38.9921 226.846 39.5072 226.216 39.5072H199.048C198.309 39.5072 197.746 40.2085 197.922 40.947C198.285 42.4861 198.873 43.8824 199.691 45.1484C200.757 46.7992 202.12 48.1087 203.779 49.0768C205.439 50.0449 207.287 50.5414 209.322 50.5662C211.503 50.5662 213.477 49.9891 215.246 48.8348C216.803 47.817 218.099 46.4703 219.135 44.7823C219.389 44.3665 219.886 44.1679 220.359 44.2796L224.332 45.2291C225.071 45.4029 225.453 46.2593 225.09 46.9357C223.66 49.6229 221.691 51.8695 219.171 53.6692C216.24 55.773 212.956 56.8218 209.322 56.8218ZM198.849 34.5921H219.826C220.546 34.5921 221.11 33.9157 220.964 33.1958C220.655 31.6505 220.068 30.2107 219.208 28.8765C218.093 27.1512 216.676 25.7673 214.955 24.7247C213.235 23.6821 211.357 23.1608 209.322 23.1608C207.287 23.1608 205.421 23.6697 203.725 24.6874C202.029 25.7052 200.629 27.0767 199.527 28.802C198.673 30.1363 198.073 31.5884 197.722 33.1648C197.558 33.8971 198.122 34.5921 198.849 34.5921Z" fill="#FB8F67"/>
                <Path d="M265.62 32.6931V54.5194C265.62 55.2579 265.039 55.8537 264.318 55.8537H260.811C260.09 55.8537 259.508 55.2579 259.508 54.5194V34.0708C259.508 32.1842 259.06 30.4714 258.163 28.9323C257.267 27.3932 256.068 26.1707 254.565 25.2646C253.063 24.3585 251.391 23.9055 249.55 23.9055C247.732 23.9055 246.067 24.3585 244.552 25.2646C243.038 26.1707 241.833 27.3932 240.936 28.9323C240.039 30.4714 239.591 32.1842 239.591 34.0708V54.5194C239.591 55.2579 239.01 55.8537 238.289 55.8537H234.782C234.061 55.8537 233.479 55.2579 233.479 54.5194V19.9523C233.479 19.2138 234.061 18.618 234.782 18.618H238.289C239.01 18.618 239.591 19.2138 239.591 19.9523C239.591 21.1004 240.894 21.6838 241.754 20.9515C242.572 20.2502 243.474 19.642 244.461 19.1207C246.424 18.0905 248.556 17.5754 250.858 17.5754C253.572 17.5754 256.049 18.2519 258.291 19.6048C260.532 20.9577 262.313 22.776 263.633 25.0598C264.96 27.3436 265.62 29.888 265.62 32.6931Z" fill="#FB8F67"/>
                <Path d="M303.025 0H305.921C306.805 0 307.526 0.738507 307.526 1.64457V54.2089C307.526 55.1149 306.805 55.8535 305.921 55.8535H303.025C302.141 55.8535 301.42 55.1149 301.42 54.2089C301.42 52.7753 299.748 52.0244 298.731 53.0111C298.034 53.6814 297.271 54.2771 296.441 54.8109C294.357 56.1513 291.91 56.8216 289.099 56.8216C286.458 56.8216 283.987 56.3127 281.685 55.2949C279.383 54.2771 277.354 52.8684 275.597 51.0687C273.84 49.269 272.465 47.19 271.472 44.8317C270.479 42.4734 269.982 39.9414 269.982 37.2356C269.982 34.5299 270.479 31.9916 271.472 29.6209C272.465 27.2503 273.84 25.1651 275.597 23.3654C277.354 21.5656 279.383 20.1569 281.685 19.1391C283.987 18.1213 286.458 17.6125 289.099 17.6125C291.91 17.6125 294.357 18.2827 296.441 19.6232C297.271 20.1569 298.034 20.7589 298.731 21.4229C299.754 22.4034 301.42 21.6587 301.42 20.2252V1.64457C301.42 0.738507 302.141 0 303.025 0ZM289.172 50.7522C291.571 50.7522 293.648 50.1502 295.405 48.9462C297.162 47.7423 298.519 46.1101 299.476 44.0498C300.433 41.9894 300.911 39.718 300.911 37.2356C300.911 34.7036 300.427 32.4136 299.457 30.3657C298.488 28.3177 297.125 26.6917 295.369 25.4878C293.612 24.2838 291.546 23.6819 289.172 23.6819C286.773 23.6819 284.599 24.29 282.648 25.5064C280.697 26.7228 279.141 28.3549 277.978 30.4029C276.815 32.4509 276.233 34.7284 276.233 37.2356C276.233 39.7428 276.827 42.0204 278.014 44.0684C279.201 46.1163 280.776 47.7423 282.739 48.9462C284.701 50.1502 286.846 50.7522 289.172 50.7522Z" fill="#FB8F67"/>
                <Path d="M327.334 56.5609C325.371 56.4865 323.463 56.1079 321.61 55.4252C319.756 54.7426 318.133 53.8117 316.739 52.6326C315.819 51.8568 315.068 50.9942 314.48 50.0633C314.001 49.3062 314.329 48.2822 315.134 47.9285L317.787 46.7555C318.405 46.4825 319.114 46.6997 319.52 47.2458C319.877 47.7237 320.338 48.1891 320.901 48.6297C321.846 49.3745 322.936 49.9702 324.172 50.417C325.408 50.8639 326.655 51.0873 327.915 51.0873C329.248 51.0873 330.496 50.8763 331.659 50.4543C332.822 50.0323 333.773 49.4055 334.512 48.5739C335.251 47.7423 335.621 46.7431 335.621 45.5764C335.621 44.3352 335.215 43.3609 334.403 42.6534C333.591 41.9459 332.574 41.3874 331.35 40.9778C330.126 40.5682 328.885 40.1772 327.625 39.8049C325.129 39.1595 322.9 38.3837 320.937 37.4777C318.975 36.5716 317.43 35.4173 316.303 34.0148C315.177 32.6122 314.613 30.8187 314.613 28.6342C314.613 26.3256 315.237 24.3273 316.485 22.6393C317.733 20.9513 319.374 19.648 321.41 18.7295C323.445 17.811 325.626 17.3518 327.952 17.3518C330.884 17.3518 333.561 17.9972 335.984 19.2881C337.868 20.2934 339.382 21.5781 340.521 23.1357C341.042 23.8494 340.854 24.8672 340.109 25.314L337.704 26.7538C337.074 27.1324 336.275 26.9586 335.833 26.369C335.493 25.916 335.088 25.5002 334.609 25.1154C333.761 24.4328 332.792 23.8929 331.701 23.4957C330.611 23.0985 329.496 22.8875 328.358 22.8627C326.952 22.813 325.638 22.9992 324.414 23.4212C323.191 23.8432 322.209 24.4824 321.47 25.3389C320.731 26.1953 320.362 27.2565 320.362 28.5225C320.362 29.7637 320.756 30.707 321.543 31.3524C322.33 31.9978 323.36 32.5129 324.632 32.8977C325.904 33.2825 327.292 33.7231 328.794 34.2195C330.999 34.9394 333.058 35.771 334.972 36.7143C336.887 37.6576 338.431 38.8368 339.606 40.2517C340.782 41.6667 341.357 43.4168 341.333 45.5019C341.333 47.7857 340.666 49.7778 339.334 51.4783C338.001 53.1787 336.275 54.4757 334.155 55.3694C332.028 56.263 329.757 56.6602 327.334 56.5609Z" fill="#FB8F67"/>
                <Path d="M163.734 12.1887C162.74 11.4378 162.147 10.4325 161.953 9.15404C161.759 7.87562 162.031 6.72752 162.758 5.70975C163.364 4.86574 164.139 4.3072 165.097 4.02794C166.587 3.59352 168.24 3.9845 169.373 5.07674C170.106 5.78422 170.554 6.68408 170.718 7.77632C170.881 8.86857 170.718 9.86773 170.221 10.7676C169.464 12.1515 168.004 13.039 166.453 13.0762C165.466 13.1072 164.557 12.8093 163.734 12.1887Z" fill="#F46B5D"/>
                <Path d="M175.315 17.8299C174.443 16.9363 174.007 15.844 174.007 14.5532C174.007 13.2624 174.443 12.1701 175.315 11.2765C176.036 10.5379 176.89 10.1035 177.872 9.97941C179.41 9.78082 180.985 10.4262 181.942 11.6798C182.56 12.4928 182.875 13.4547 182.875 14.5594C182.875 15.664 182.566 16.626 181.942 17.4389C180.991 18.6863 179.41 19.338 177.878 19.1394C176.89 19.0028 176.036 18.5746 175.315 17.8299Z" fill="#F1562A"/>
                <Path d="M62.2346 5.06909L47.1832 55.4312C47.0824 55.7714 46.7977 55.9962 46.4775 55.9962H42.1483C41.828 55.9962 41.5434 55.7653 41.4425 55.4251L31.5209 26.7474C31.3905 26.3768 30.8805 26.3768 30.75 26.7474L20.8284 55.4251C20.7276 55.7653 20.4429 55.9962 20.1167 55.9962H15.7935C15.4732 55.9962 15.1886 55.7714 15.0877 55.4312L0.0363243 5.06909C-0.117867 4.5405 0.237959 3.99976 0.742045 3.99976H5.62871C5.94896 3.99976 6.23362 4.23064 6.33443 4.5648L17.448 43.4923C17.5607 43.8811 18.0885 43.8994 18.2249 43.5166L29.4631 12.2871C29.558 11.9469 29.8426 11.716 30.1688 11.716H32.114C32.4402 11.716 32.7248 11.9469 32.8197 12.2871L43.4826 42.9212C43.6131 43.2979 44.1409 43.2857 44.2536 42.9029L55.9365 4.5648C56.0373 4.23064 56.322 3.99976 56.6422 3.99976H61.5289C62.033 3.99976 62.3888 4.5405 62.2346 5.06909Z" fill="#1D878C"/>
            </G>
        </Svg>
    )
}

export default Logo;


