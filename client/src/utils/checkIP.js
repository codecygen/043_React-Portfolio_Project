const checkIP = async () => {
    const ipRes = await fetch("https://www.myexternalip.com/json");
    const ipData = await ipRes.json();
    let ip = ipData.ip;

    if (!ip) {
        ip = "Cannot connect API to get info!";
    }

    // const ipInfoRes = await fetch(`http://ip-api.com/json/${ip}`);
    // let ipInfo = await ipInfoRes.json();

    // if (ipInfo.status !== "success") {
    //     ipInfo = "Cannot connect API to get IP info!";
    // }

    // console.log(ipInfo);

    return ip;
};

export default checkIP;