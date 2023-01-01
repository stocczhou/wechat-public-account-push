/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx98d1da69637cacfe',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f2e49a383e73021c6fd4313b9e3d6adb',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '王小盆宇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyZ1U6LULRgDLPKnT6Ikyo5hIBjY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EopaJB4MutqVOA4z7hydZ1mCLPo-0xDIwdt8B8t8sLg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '王小盆宇', year: '1997', date: '08-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '周先森', year: '1994', date: '03-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-01' },
      ],
    },
    
     {
      // 想要发送的人的名字
      name: '周先森',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyZ1U6LULRgDLPKnT6Ikyo5hIBjY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EopaJB4MutqVOA4z7hydZ1mCLPo-0xDIwdt8B8t8sLg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '王小盆宇', year: '1997', date: '08-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '周先森', year: '1994', date: '03-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-01-01' },
      ],
    },
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BxwsSAVNH05aZ44JdDAvGYXLE_45phEsi7shh-c8vPg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyZ1U6LULRgDLPKnT6Ikyo5hIBjY',
    }
  ],

}

module.exports = USER_CONFIG

