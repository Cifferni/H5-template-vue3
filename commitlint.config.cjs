module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  },
  prompt: {
    settings: {},
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      generatingByAI: "正在通过 AI 生成你的提交简短描述...",
      generatedSelectByAI: "选择一个 AI 生成的简短描述:",
      confirmCommit: "是否提交或修改commit ?",
    },
    questions: {
      type: {
        description: '选择您要提交的更改类型：',
        enum: {
          feat: {
            description: '新功能',
            title: '特性',
            emoji: '✨'
          },
          fix: {
            description: '修复缺陷',
            title: '修复',
            emoji: '🐛'
          },
          docs: {
            description: '文档变更(更新README文件，或者注释)',
            title: '文档',
            emoji: '📚'
          },
          style: {
            description: '代码格式（空格、格式化、缺失的分号等）',
            title: '格式',
            emoji: '🌈'
          },
          refactor: {
            description: '代码重构（不修复错误也不添加特性的代码更改）',
            title: '重构',
            emoji: '🔄'
          },
          perf: {
            description: '性能优化',
            title: '性能',
            emoji: '🚀'
          },
          test: {
            description: "添加疏漏测试或已有测试改动",
            title: '测试',
            emoji: '🚨'
          },
          build: {
            description: '构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）',
            title: '构建',
            emoji: '🛠'
          },
          ci: {
            description: '修改 CI 配置、脚本',
            title: '集成',
            emoji: '⚙️'
          },
          chore: {
            description: ' 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
            title: '其他',
            emoji: '♻️'
          },
          revert: {
            description: '回滚 commit',
            title: '回滚',
            emoji: '↩️'
          }
        }
      },
      scope: {
        description:
          '此更改的范围是什么（例如组件或文件名）'
      },
      subject: {
        description: '用祈使时态写一个简短的描述来说明这一变化'
      },
      body: {
        description: '提供变更的更详细描述'
      },
      isBreaking: {
        description: '有没有什么重大变化？'
      },
      breakingBody: {
        description:
          '重大变更提交需要正文。请输入提交本身的详细描述'
      },
      breaking: {
        description: '描述重大变化'
      },
      isIssueAffected: {
        description: '这一变化是否会影响任何未解决的问题？'
      },
      issuesBody: {
        description:
          '如果问题已解决，则提交需要正文。请输入提交本身的详细描述'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
};
