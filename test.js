const Arweave = require('arweave');
var wallet = {"kty":"RSA","n":"xoL74yHOwa4Bx9aezs0PEEsg65J5K1wogLupoin2tS6FMAZr6L0WWXinDoDLgt5sUwLlCdYxaH9kewuYriTwHrekmUqa11nTKGaNZ8SVxv1TeYAkH0bT2yn65WftvDpo5z6UY8Gh3117nsEDF-xVSpD_iYGq4OSl2SIixY96IZ-4iRKU5m4oPYs0hB78ENkAW_hZ2SOZzLUZ6fL6gdTRaRw9naU9Spgcd5M6W8ZuIvz13W6BJsYzRTzHO_jYkoSW_EW_gtMWSpPDcwV-NkoMokUAKsMm7GH4XMJ3zZ7ezF8x2DWtuCyBBsOO58k1A_DiTyiwpcnVa0HNx_VsukmUGG5OiphorM3FzXBB6DcTB-dfmQAg9H2l9kYzYImcu6Oehl8uyTBwpyRyGqoS_VurXxHHWsG2-AwVG5GI95NQBi1sq095_Xg5kkrvXSUclulOiGXKcZSRpTl41jhOGn9Zc-59Ncm9ilzvs0m0rcx3JpW4J0WzTZrByqE-MASuz_-pB0pSUsxidF9NP8rpijXOCdmQl9wsJM5jjtQNIF44sOJVWrZMqhGmDLf-D01fvDjg2zGjDWUQUTCOz5sx4df58ObkbrRcJ95KRom19TyJ_ttnFTXdRB4sk4mKNE4zR4RHUEsdKYJJECS105xZJDlqp38CAWmTfhpv0Ll1ybif8VU","e":"AQAB","d":"QGMx4k0P7ABNsYzqe7dFYIqNxfr_dFHzDTZRYjjsPX42UwpyK85RFnos7WZXHD6ash4pPhSMeBGB_OsY_bsba0szh0kMijcnZ15EFVlNH3sBfVJT5RUrGFY4e_pGwRvM9Nx2cxjWMUX4F9kQ8MyGKaZ4TBiT3Vgsdw48awoLmiZdS5CMXWVzherGAOiv56MLG8mlEuoaM6y2GAzotf3aYpZ3Yc-73psR-LL3Zdcp2A1mjgkOuQ3miVmaYdhoHrYE5xSUdpGTFGNzLLamZmOET4nD8RrVYCyyyxuEklwqde2WlENs8mT1AMWjb4jyujGCphxTl6Ksp5pzbZ0sRAwjjWpyelQAbQBJAkkITww8PuQ4L3naHqBkkkW4-QFuSkyVQYfEAHNzISqQVQVINWY2yLkmXc1NKP8vuHuVcyNt5SNuDMaBPvDLanJkhwf4KSKZLITTvE4vqkEQj3t66UlodNkKv8q52fAUL8kNnCrR4DHXMOO62sv1V-wMTz6kO5TzL32IDEYeZHbMFdVb_BUA8UGc-oITXPO2JFdfy2l-T88dVlQOv9p90gBy1yOZrC5ng-P_Z7J5fvJ3bgc_DSar0SouS9kiwe5evzRmQ7eTFIoYOLrUD8Uu4oo5giogecJAzLcmckTscGW1PpYDlGibLshngAW1ovNty4FqK2u2MA0","p":"8lo3_OfRZY-cinb9jen19aILpnzYhc80sadxHy62ktar7VLXe1aXtAswpGK8yJsvQrHssOHQbu7bO7ZE48Gqlsy6jmxaIdPbm4ISz-zPqdADrGiK-317IoxWlBy0IzPfCHioHDmLcUNvmksXMwDGvojvlWl44mGRRVD88qjx4Q4eHkeHwUFpZ1SwJAAXhpXQzQ4QJPiOMh-ptLuH4Kl_d3GHY9lfat9NUYDhwWF-jGzrZ9woHPsgt7gZ-EGDu2zaSWt21fz_4HhMOLtnhGqUPy-RqKaykKjS9S2-s7o6x70E90YfNhnK_glDw27RRffyWRMMbzmK3gSkwxXmBXPg_w","q":"0bDAaRshCBuRo6goyNefAu_iRxA9CENmo6t3oVrQdn1s9fQTb0fv484Rd85aDXR4Z80TXHa1j8Xf2rgoinmZxmW-6cI4BWEP5AgNEEYUszZqQOBNsBHDNWtORrjHb3qjj50LiNAEDUJ0lt0msJvUBhBFITIKHAfgm9xMrLLaGE8z4PWD7VB8UODjjQV9tDqwRM76bOjDppKuJsWSvhDC0hj0SpK_zcOGtdStCrBQDOv0XtSqIJpqv75vzXAj2bNHaewsDuXn0wj1qnoyaRMF0cmTGUCznqf4G-Gp0InjKsB5-6iVwIxraQMA8N32dTF3Ktf2J9ecoiM9N7ZWNQBZqw","dp":"Q193TxR27t_0qb2YkVooKUgKKxdr7g8DXBvrY7rNwJZzJz-vbbdN5xxxQlG8n5wckFL8NNQh6KT4R2pNTm-pZ9C0UCGpENxfoaSQbEMuG8wbKVPKx01D7P_MldJA9cRWzXkVavtIW41euisD4QbnOVLCH-w5Ud3Dz9xK5X6391PAZbSG9d-kWLh_WxK3d4-wg0DUliKPDTomKHs1s-wK5n6mH8jvMLuxN-Y3XFYpIwqoiq_2atAZcVl5xr0XzQPezyhT2ftCevmWXvMiPPqQCdzEhnkJDRQRyV0VNcugyaQvfDp_NMAI4YRb1Tm6bdQXCFI2U7lQdJYf46fz0TI8qw","dq":"UOhZJXTxRtaUWEg_DFeeJBz4-yB53CFdjhNQAnMu8jks_K2jfhGMryJIvShiuMRS3QJU0R2AqqvX1uWtxthqjBGgG0P0J6cu4XZ1y-yuegOp9cRWVXRVFNyFhGYxlYMFbxlSZQSWO6ODpt5H2mcV5Q0MD2XmXrBvatQSxaPw4OZWhxtUPxIKFY7gXf5bZVorvzD5kWIyc6gvCAi9uRZwhW5ZfBipZzRlWu1nozMqgAHe9WQrDI9oVvmc2_DD9HDnQih9S3ZL_7J6T7_8iWxsl2immFzNsY7v_ZoR0sQRYeKIbqC6v2Ou4gLlrwqF2OwwJdjUQsU_y5O7QC7bjnHHJw","qi":"n2m8ububJzgxgqtxPrQsaukCfWC3hguA0xK69uxoYIpo5XsZ4whZRkivwDQZ5PDbBtWhMjYl4EG7_0mpOhj9nwlThP_T8Pnu-cM00jLMU2VA0HmMcdORhekiGUY1MnM3EFCXErmCufwkidlCN1LVrgjNsP45y1_3LEXYmta_gUjNOMzUB95gLDVyRH-X9T3yEeqlLvA9_HScLBXj_xBq0SDOsSHWYcGY_3VtgkPAP_47yXMiMhYHeOmDyBvp0FV5ZFI378fLDMFRh5d6ClalQB51QB5yKT3FevulZyqSB8jc-lYrWswNgehJnpi0-knQj4XrJ0L8H5_eYcMhiEfO1A"}
var myAddress = "" 
testArweave()
async function testArweave () {

    const arweave = await Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false
    });
    
    // await arweave.wallets.generate().then((key) => {
    //     console.log('New', key.kty);
    //     wallet = key
    // });
    
    await arweave.wallets.jwkToAddress(wallet).then((address) => {
        console.log('address is', address);
        myAddress = address
    });
    
    console.log('checking ', myAddress)
    
    await arweave.wallets.getBalance(myAddress).then((balance) => {
        let winston = balance;
        let ar = arweave.ar.winstonToAr(balance);
    
        console.log('winston', winston);
        //125213858712
    
        console.log('ar: ', ar);
        //0.125213858712
    });

}