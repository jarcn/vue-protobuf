<template>
    <div class="">
        <button @click="_getAdRes">广告详情</button>
    </div>
</template>

<script>
    import {getAdRes} from '@/api/direct'

    export default {
        name: 'HelloWorld',
        methods: {
            _getAdRes() {
                let imp_tmp = {
                    adId: "110011",
                    size: "640x100",
                    floorPrice: 200,
                    viewType: 401
                }
                let device_tmp = {
                    os: "android",
                    osv: "10.0.1",
                    deviceType: "android",
                    orientation: 1,
                    brand: "小米",
                    hwv: "R11",
                    network: 1,
                    h: 300,
                    w: 300,
                    deviceSize: "1024x768",
                    ip: "101.81.247.204",
                    deviceId: "E3A7DD9C-6BF5-4F5E-B654-9267C8AD57E9",
                    mac: "44:6e:e5:04:df:27",
                    androidId: "8d4bfd2fcdb1dd22"
                }
                let app_tmp = {
                    appName: "kupu",
                    packageName: "com.kupu.app",
                    device: device_tmp
                }
                const req = {
                    version: 1,
                    test: true,
                    sspToken: "16f000253947705c",
                    requestId: "16f000253947705c22",
                    ip: "43.227.139.183",
                    userAgent: "Dalvik/1.6.0 (Linux; U; Android 4.4.4; R7t Build/KTU84P)",
                    language: "zh",
                    imp: imp_tmp,
                    app: app_tmp,
                }
                getAdRes(req).then((res) => {
                    console.log(res)
                }).catch((res) => {
                    console.error(res)
                })
            }
        },
        created() {
        }
    }
</script>

<style lang="scss">

</style>
