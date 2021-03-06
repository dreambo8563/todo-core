# Why create the demo repo ?
长时间的挣扎在业务系统开发, 面对重复性高的工作, 遇到的最大问题不是技术问题, 而往往是业务复杂度问题. 我想这也是为什么像 **DDD** 这种思潮能够越来越受到关注的原因.

前端开发往往更多是业务上的"面条"代码, 当业务逻辑达到一定的复杂度时, 维护性和扩展性都受到了极大的约束, 当然前提是这个系统持续在产生价值, 并且不断在迭代. 那些短命项目不在此列.

前端业务领域中, 确实看到应用 OO 范式的很少, 很多也就是玩一玩. 但OO 的角度看待业务逻辑,确实能够让我们更聚焦,是我们日常看待事物的方式, 至少比"面条"代码更易维护和扩展.

# Target ?
这个 demo 想达到的效果:
1. 抛开 view 层的东西,UI,UX 相关. 纯粹的针对 business logic 进行聚焦
2. 利用 TS 来从 OO 的角度实现更好的维护性和扩展性
3. 初步实践 DDD 中对领域的拆分
4. 可能的情况下使用/学习一些适当的设计模式
5. 将这个 core 暴露给当前流行的前端框架...


# How ?
```
.
├── core    // 核心业务规则
│   ├── Entities    // 基础业务对象/规则
│   └── Services    // 对 Entities 组合后的组合型规则
├── Interface   //外部和UseCases/Entities 之间的适配层
│   ├── API     // 对外通信层
│   └── Repository  // 数据存储层
└── UseCases    // 基于Entities形成的应用层用例
```


# TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

