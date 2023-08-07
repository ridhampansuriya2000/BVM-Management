import React from 'react'

const Keysvg = ({height,width}) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="72" cy="72" r="72" fill="#D9D9D9" />
                <circle cx="72" cy="72" r="47" fill="black" />
                <mask id="mask0_1_90" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="42" y="41" width="58" height="58">
                    <rect x="42" y="41" width="58" height="58" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_90)">
                    <path d="M58.917 74.8333C57.5878 74.8333 56.45 74.3601 55.5035 73.4135C54.5569 72.467 54.0837 71.3292 54.0837 70C54.0837 68.6708 54.5569 67.533 55.5035 66.5865C56.45 65.6399 57.5878 65.1667 58.917 65.1667C60.2462 65.1667 61.384 65.6399 62.3305 66.5865C63.2771 67.533 63.7503 68.6708 63.7503 70C63.7503 71.3292 63.2771 72.467 62.3305 73.4135C61.384 74.3601 60.2462 74.8333 58.917 74.8333ZM58.917 84.5C54.8892 84.5 51.4656 83.0903 48.6462 80.2708C45.8267 77.4514 44.417 74.0278 44.417 70C44.417 65.9722 45.8267 62.5486 48.6462 59.7292C51.4656 56.9097 54.8892 55.5 58.917 55.5C61.6156 55.5 64.0625 56.1646 66.2576 57.4938C68.4528 58.8229 70.1948 60.575 71.4837 62.75H92.7503L100 70L89.1253 80.875L84.292 77.25L79.4587 80.875L74.3232 77.25H71.4837C70.1948 79.425 68.4528 81.1771 66.2576 82.5063C64.0625 83.8354 61.6156 84.5 58.917 84.5ZM58.917 79.6667C61.1725 79.6667 63.1562 78.9819 64.868 77.6125C66.5798 76.2431 67.7177 74.5111 68.2816 72.4167H75.8337L79.3378 74.8938L84.292 71.2083L88.5816 74.5312L93.1128 70L90.6962 67.5833H68.2816C67.7177 65.4889 66.5798 63.7569 64.868 62.3875C63.1562 61.0181 61.1725 60.3333 58.917 60.3333C56.2587 60.3333 53.983 61.2799 52.0899 63.1729C50.1969 65.066 49.2503 67.3417 49.2503 70C49.2503 72.6583 50.1969 74.934 52.0899 76.8271C53.983 78.7201 56.2587 79.6667 58.917 79.6667Z" fill="white" />
                </g>
            </svg>
        </>
    )
}

export default Keysvg
