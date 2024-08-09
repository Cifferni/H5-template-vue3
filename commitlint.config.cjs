module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // type 的类型定义: 表示git提交的type必须再以下类型范围
    'type-enum': [
      // 当前验证的错误级别，2表示错误
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型内容
      [
        'feat', // 'feat: 新功能'
        'fix', // 'fix: 修复'
        'docs', // 'docs: 文档变更'
        'style', // 'style: 代码格式（不影响代码运行的变动）'
        'refactor', // '重构（即不增加feature，也不修复bug）'
        'perf', // 'perf: 性能优化'
        'test', // 'test: 增加测试'
        'chore', // 'chore: 构建过程或辅助工具的变动'
        'revert', // 'revert: 回退'
        'build' // 'build: 打包'
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
};
