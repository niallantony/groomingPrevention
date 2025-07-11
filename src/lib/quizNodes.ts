import type { QuizNode } from "./QuizNode";

export const quiz: QuizNode[] = [
  {
    id: 0,
    terminus: false,
    text: "오늘 기분이 좀 안 좋아? 너 톤이 좀 다운된 것 같아. 내가 다 들어줄게. 나한테만 말해봐.",
    options: [
      {
        label: "고마워ㅠㅠ 사실은 내가 아무것도 잘 하는 게 없는 것 같고.. 다른 친구들은 다들 알아서 잘 하는데 나만 이런 것 같아서 고민이야.. ",
        next: 1,
        score: 0,
      },
      {
        label: "고민이 좀 있긴 한데 너무 개인적인 이야기라 ㅠㅠ ..걱정해줘서 고마워! ",
        next: 2,
        score: 10,
      },
    ]
  },
  {
    id: 1,
    terminus: false,
    text: "정말 힘들었겠다. 근데 이런 얘기는 나한테만 해야 되는 거 알지? 다른 사람들은 이런 얘기 들으면 좀 싫어할 수도 있을 것 같아. 나는 너를 믿으니까 안 그러지만. ",
    options: [
      {
        label: "맞아 ㅠㅠ 이런 얘기 들어줄 사람은 오빠밖에 없어.. 내 친구들이나 부모님은 이야기를 안 들어줘 ",
        next: 3,
        score: 0,
      },
      {
        label: "오빠도 잘 들어주지만 내 친구들이나 부모님도 내 이야기 잘 들어주시긴 해.. ",
        next: 4,
        score: 10,
      },
    ]
  },
  {
    id: 2,
    terminus: false,
    text: "나랑 같이 이야기하면 좋은데.. 나를 못 믿는 것 같아서 속상하다 ",
    options: [
      {
        label: "아 ㅠㅠ 그건 아니고! 지금이라도 이야기해줄게! 기분 풀어 ㅜㅜ ",
        next: 5,
        score: 0,
      },
      {
        label: "못 믿는 건 아니지만 조금 조심스러워서 그런 거야! 기분 풀어ㅜㅜ ",
        next: 6,
        score: 10,
      },
    ]
  },
  {
    id: 3,
    terminus: false,
    text: "그래. 그런 얘기는 어디 가서 하지 마. 나랑 너랑 둘만의 비밀이야. 알겠지? ",
    options: [
      {
        label: "응 고마워 오빠.. 내 얘기 들어줬으니까 나도 오빠 소원 하나 들어줄게! ",
        next: 7,
        score: 0,
      },
      {
        label: "잘 들어줘서 고맙지만.. 우리가 벌써 비밀이 있을 만큼 친해졌나?! 빠른 것 같아 ",
        next: 8,
        score: 10,
      },
    ]
  },
  {
    id: 4,
    terminus: false,
    text: "아 그래? 그래도 다른 사람한테 이야기하는 건 조심해 속으로 무슨 생각할지 몰라. 나한테는 언제든지 준비가 되면 이야기해 줘 ㅎㅎ ",
    options: [
      {
        label: "응 고마워 오빠.. 내 얘기 들어줬으니까 나도 오빠 소원 하나 들어줄게! ",
        next: 7,
        score: 0,
      },
      {
        label: "으응.. 알겠어. ",
        next: 9,
        score: 10,
      },
    ]
  },
  {
    id: 5,
    terminus: false,
    text: "응! 나 진짜 믿어도 돼 너 주변에 나만큼 니 이야기 잘들어주는 사람이 없잖아! 알지? ",
    options: [
      {
        label: "미안해 그래도 안 될 것 같아 ㅠㅠ ",
        next: 11,
        score: 10,
      },
      {
        label: "맞아 내 비밀이니까 이건 꼭 지켜줘야해 ",
        next: 10,
        score: 0,
      },
    ]
  },
  {
    id: 6,
    terminus: false,
    text: "알겠어.. 날 못 믿는 구나.. 어쩔수 없지 실망스럽고 속상하네 우리 관계에 대해 다시 생각해봐야겠어 ",
    options: [
      {
        label: "미안해 오빠! 지금이라도 이야기해줄게! ",
        next: 10,
        score: 0,
      },
      {
        label: "오빠ㅠㅠ 화 많이 났어? 못 믿는건 아니었는데.. ",
        next: 11,
        score: 10,
      },
    ]
  },
  {
    id: 7,
    terminus: false,
    text: "와 정말? 그러면.. 나 너 얼굴 진짜 궁금했는데. 얼굴 사진 보내주면 안돼? ",
    options: [
      {
        label: "ㅎㅎ 얼굴은 좀 그런데 다른 소원 없어? ",
        next: 13,
        score: 10,
      },
      {
        label: "못생겨서 부끄러운뎅.. 오빠만 봐야 돼! ㅎㅎ ",
        next: 12,
        score: 0,
      },
    ]
  },
  {
    id: 8,
    terminus: false,
    text: "앗.. 조금 머쓱하네 ㅎㅎ 그럼 우리 사진 서로 교환할까? 더 친해질겸ㅎㅎ ",
    options: [
      {
        label: "얼굴 사진은 좀 그래 ㅋㅋ 그냥 상상하자! 나는 오빠를 차은우로 상상하는 중이야 ",
        next: 14,
        score: 10,
      },
      {
        label: "못생겨서 부끄러운뎅.. 오빠만 봐야 돼! ㅎㅎ ",
        next: 12,
        score: 0,
      },
    ]
  },
  {
    id: 9,
    terminus: false,
    text: "우리 대화한지도 엄청 오래 됐는데 서로 얼굴을 모르니까 어색하지 않아? 우리 서로 얼굴 공개하는 거 어때? 나도 사진 보내줄게 ㅎㅎ ",
    options: [
      {
        label: "얼굴 사진은 좀 그래 ㅋㅋ 그냥 상상하자! 나는 오빠를 차은우로 상상하는 중이야 ",
        next: 14,
        score: 10,
      },
      {
        label: "못생겨서 부끄러운뎅.. 오빠만 봐야 돼! ㅎㅎ ",
        next: 12,
        score: 0,
      },
    ]
  },
  {
    id: 10,
    terminus: false,
    text: "고마워! 서로 비밀을 나누는 사이니까 어른들한테는 우리가 어떤 사이인지 절대로 이야기하면 안  돼! ㅎㅎ ",
    options: [
      {
        label: "응 그럼! 당연하지 절대로 아무한테 이야기 안해! ",
        next: 39,
        score: 0,
      },
      {
        label: "음...",
        next: 15,
        score: 10,
      },
    ]
  },
  {
    id: 11,
    terminus: false,
    text: "그래도 니가 날 믿고 있다는 걸 증명할 수 있는 기회를 줄게 ! 서로 사진 보여주는 건 어때? 그럼 더 친해지지 않을까? ",
    options: [
      {
        label: "안 될 것 같은데.. ㅠㅠ 선생님이 사진은 보내지 말라고 하셨어.. ",
        next: 15,
        score: 10,
      },
      {
        label: "우와 오빠 진짜 멋지다! 그럼 나도 부끄럽지만 보낼게 ㅎㅎ ",
        next: 16,
        score: 0,
      },
    ],
    imageReceived: "/dohun.jpg",
  },
  {
    id: 12,
    terminus: false,
    text: "헉 생각했던 것보다 훨씬 예쁜데? 다른 사진은 없어? 엄청 날씬할 거 같은데 ㅎ 전신 사진도 보여주라 ㅎㅎ ",
    options: [
      {
        label: "진짜? 고마워ㅜㅜ 나 통통한 편이어서 전신은 부끄러운뎅.. 보고 바로 삭제해줘야 돼! ",
        next: 17,
        score: 0,
      },
      {
        label: "전신 사진은 좀 그래....ㅜ ",
        next: 18,
        score: 10,
      },
    ],
    imageSent: "/facepic.png"
  },
  {
    id: 13,
    terminus: false,
    text: "에이.. 소원 들어준다며 실망이야. 나는 피곤한데 이 밤에 너 고민도 다 들어줬는데 ",
    options: [
      {
        label: "얼굴 사진 보내는 건 조심해야 한다고 해서 ㅠㅠ 미안해 ",
        next: 20,
        score: 10,
      },
      {
        label: "아니 그런 게 아니라.. 알겠어.. 진짜 오빠만 봐야 돼. 알겠지? ",
        next: 19,
        score: 0,
      }
    ]
  },
  {
    id: 14,
    terminus: false,
    text: "서로 얼굴을 알아야 친밀감도 생기고 신뢰도 생기는 건데.. 서운하네. 나는 너 고민도 다 들어줬는데 ",
    options: [
      {
        label: "얼굴사진 보내는건 조심해야한다고 해서 ㅠㅠ 미안해 ",
        next: 20,
        score: 10,
      },
      {
        label: "아니 그런 게 아니라.. 알겠어.. 진짜 오빠만 봐야 돼. 알겠지? ",
        next: 19,
        score: 0,
      }
    ]
  },
  {
    id: 15,
    terminus: false,
    text: "나는 너한테 비밀도 이야기하고 사진도 보냈는데 넌 진짜 끝까지 나를 못 믿는 구나 그럼 이제 연락하지 말자 ",
    options: [
      {
        label: "화났어? ㅠㅠ 오빠 화 풀리면 연락해줘! 알겠지? ㅠㅠ 미안해 ",
        next: 20,
        score: 10,
      },
      {
        label: "아니야 오빠! ㅠㅠ 그럼 진짜 오빠만 본다고 했으니까 .. 화나게 해서 미안해ㅠ ",
        next: 19,
        score: 0,
      }
    ]
  },
  {
    id: 16,
    terminus: false,
    text: "우리 진짜 이런 이야기까지 나눌 수 있는 사이가 됐더니 너무 감동이야 나를 믿어줘서 고마워",
    options: [
      {
        label: "우와 고마워 ㅠㅠ 나 초코라떼 진짜 좋아해~! 난 줄게 없는데 늘 받기만 하네 ",
        next: 21,
        score: 0,
      },
      {
        label: "선물고마운데 이런거 받아도 되나..? ㅠㅠ 안줘도 돼 오빠 ",
        next: 21,
        score: 10,
      }
    ],
    imageSent: "/facepic.png",
    imageReceived: "/coupon.jpg",
  },
  {
    id: 17,
    terminus: false,
    text: "헐.. 난 통통한 여자 좋아하거든. 진짜 섹시하다. 너 혹시.. 키스해본 적 있어? ",
    options: [
      {
        label: "키스 안 해봤는데.. 나도 궁금하긴 해 ㅎㅎ... ",
        next: 22,
        score: 0,
      },
      {
        label: "키스?! 갑자기 그런 이야기는 왜?ㅋㅋ ",
        next: 23,
        score: 10,
      }
    ],
    imageSent: "/bodypic.jpg"
  },
  {
    id: 18,
    terminus: false,
    text: "알겠어.. 근데 너 진짜 섹시하게 생겼다. 너 혹시 키스해본 적 있어? ",
    options: [
      {
        label: "키스 안 해봤는데.. 나도 궁금하긴 해 ㅎㅎ... ",
        next: 22,
        score: 0,
      },
      {
        label: "키스?! 갑자기 그런 이야기는 왜?ㅋㅋ ",
        next: 23,
        score: 10,
      }
    ]
  },
  {
    id: 19,
    terminus: false,
    text: "헐.. 너 진짜 섹시하게 생겼다. 너 혹시.. 키스해본 적 있어? ",
    options: [
      {
        label: "키스 안 해봤는데.. 나도 궁금하긴 해 ㅎㅎ... ",
        next: 22,
        score: 0,
      },
      {
        label: "키스?! 갑자기 그런 이야기는 왜?ㅋㅋ ",
        next: 23,
        score: 10,
      }
    ],
    imageSent: "/facepic.png"
  },
  {
    id: 20,
    terminus: false,
    text: "알겠어 근데 너 혹시 키스 해본 적 있어? 난 안 해봤는데 다들 엄청 좋다고해서 궁금해 ",
    options: [
      {
        label: "키스 안 해봤는데.. 나도 궁금하긴 해 ㅎㅎ... ",
        next: 22,
        score: 0,
      },
      {
        label: "키스?! 갑자기 그런 이야기는 왜?ㅋㅋ ",
        next: 23,
        score: 10,
      }
    ]
  },
  {
    id: 21,
    terminus: false,
    text: "아니야! 그렇게 비싼것도 아닌데 뭐 받아도 돼! 그런데 나 궁금한게 있는데 너 키스해본적 있어? ",
    options: [
      {
        label: "키스..? 그건 왜? 드라마에서 본적은있어.. ",
        next: 24,
        score: 0,
      },
      {
        label: "이런 이야기는 조금 불편한데.. ",
        next: 25,
        score: 10,
      }
    ]
  },
  {
    id: 22,
    terminus: false,
    text: "어떨 지 궁금하지 않아?! 우리 만나서 한 번 해볼래? 키스는 그렇게 위험한 것도 아니잖아! ",
    options: [
      {
        label: "키스를 해보자고?! 궁금하긴한데 고민이 되네 ",
        next: 26,
        score: 0,
      },
      {
        label: "헐.. 그런가? 그런데 아직 만나는 건 좀 그래 ",
        next: 25,
        score: 10,
      }
    ]
  },
  {
    id: 23,
    terminus: false,
    text: "키스 이야기가 왜?! 키스가 나쁜것도 아닌데.. 조금 예민하네 ^^; 이야기하지 말까? ",
    options: [
      {
        label: "아니야 오빠 그냥 좀 그런 이야기 해본적이 없어서 그런거였어 ㅠ 화났어? ",
        next: 28,
        score: 0,
      },
      {
        label: "응.. 이야기하는게 조금 불편해서 ㅠㅠ 미안해 화났어? ",
        next: 28,
        score: 10,
      }
    ]
  },
  {
    id: 24,
    terminus: false,
    text: "어떨 지 궁금하지 않아?! 나도 사실 키스 안 해봤거든 ㅠ 우리 만나서 한 번 해볼래? 키스는 그렇게 위험한 것도 아니잖아! ",
    options: [
      {
        label: "아니... 만나는건 아직 좀 그래 ㅠ ",
        next: 29,
        score: 10,
      },
      {
        label: "키스를 해보자고?! 궁금하긴한데 고민이 되네 ",
        next: 29,
        score: 0,
      }
    ]
  },
  {
    id: 25,
    terminus: false,
    text: "키스 이야기가 왜?! 키스가 나쁜것도 아닌데.. 조금 예민하네 ^^; 이야기하지 말까? ",
    options: [
      {
        label: "응.. 이야기하는게 조금 불편해서 ㅠㅠ 미안해 ",
        next: 30,
        score: 10,
      },
      {
        label: "아니야 오빠 그냥 좀 그런 이야기 해본적이 없어서 그런거였어 ㅠ 화났어? ",
        next: 30,
        score: 0,
      }
    ]
  },
  {
    id: 26,
    terminus: false,
    text: "고민될 게 뭐 있어?! 그냥 궁금하니까 한 번 해보는거지! ㅎㅎ 별거 아닌건데 걱정하는 타입이야?ㅋ ",
    options: [
      {
        label: "에이 그래도 생각해봤는데 만나는 건 좀 그래.. 미안해! ",
        next: 32,
        score: 10,
      },
      {
        label: "그럼 그냥 만나서 노는건? ",
        next: 31,
        score: 0,
      }
    ]
  },
  {
    id: 27,
    terminus: false,
    text: "나를 나쁜 사람 취급하는 것 같아서 기분이 나쁘네.. 나는 너 고민도 다 들어줬는데.. ",
    options: [
      {
        label: "그냥 내가 불편하다고 얘기한 것 뿐이야. 내 감정을 존중해줬으면 해. ",
        next: 33,
        score: 10,
      },
      {
        label: "오빠 화났어? ㅠㅠ 그럼 그냥 만나서 노는거? ",
        next: 31,
        score: 0,
      }
    ]
  },
  {
    id: 28,
    terminus: false,
    text: "아니야 화 안 났어. 근데 나를 나쁜 사람 취급하는 것 같아서 좀 기분 나쁘네.. 나는 너 고민도 다 들어주고 친해졌다고 생각했는데. ",
    options: [
      {
        label: "그냥 내가 불편하다고 얘기한 것 뿐이야. 내 감정을 존중해줬으면 해. ",
        next: 33,
        score: 10,
      },
      {
        label: "아니야 오빠 왜그래 ㅠㅠ 미안해 기분나빴구나 ",
        next: 31,
        score: 0,
      }
    ]
  },
  {
    id: 29,
    terminus: false,
    text: "그럼 이번엔 그냥 만나서 룸카페 가 볼래?새로생긴 곳 가보고 싶었어 ㅎ 넷플도 무료로 볼 수 있대! ",
    options: [
      {
        label: "재미있겠다..! 근데 어른들 한테 물어보고 갈게! ",
        next: 35,
        score: 10,
      },
      {
        label: "그래? 그건 재미있을것같아.. ",
        next: 34,
        score: 0,
      }
    ]
  },
  {
    id: 30,
    terminus: false,
    text: "우리 비밀도 이야기하는 사이니까 그 정도는 괜찮을 거 라고 생각했는데.. 조금 실망이다 자꾸 나한테 벽을 치는 것 같아서... 우리 관계가 이것 밖에 안되나.. 아님 이런 이야기하는게 싫으면 한번 내가 어떤 사람인지 만나볼래? ",
    options: [
      {
        label: "그럼 엄마한테 한번 여쭤볼게.. ",
        next: 35,
        score: 10,
      },
      {
        label: "알겠어 오빠ㅠㅠ 자꾸 화나게 해서 미안해.. 그럼 잠깐만 만날까? ",
        next: 34,
        score: 0,
      }
    ]
  },
  {
    id: 31,
    terminus: false,
    text: "이번에 새로 생긴 룸카페 가보는 건 어때? 거기 과자도 많고 아이스크림도 공짜로 준대! 넷플릭스도 볼 수 있어 ㅋㅋㅋ 부모님한테는 비밀로 하고 와 또 잔소리 하실테니까 ㅎ ",
    options: [
      {
        label: "그래도 부모님께는 말씀드려야 할 것 같아! 걱정하실 것 같아 ",
        next: 36,
        score: 10,
      },
      {
        label: "알겠어! 하루는 괜찮겠지? 비밀로 할게! 그때 봐 ",
        next: 36,
        score: 0,
      }
    ]
  },
  {
    id: 32,
    terminus: false,
    text: "그래? 근데 나 너 이름, 지역, 학교 다 아는데.. 우리 대화한 거 학교에 다 알려져도 괜찮아? ",
    options: [
      {
        label: "(부모님이나 선생님에게 알리고 도움을 요청한다) ",
        next: 37,
        score: 10,
      },
      {
        label: "아니 오빠.. 왜 그래 ㅜㅜ 미안해.. 언제 어디서 만날까? ",
        next: 37,
        score: 0,
      }
    ]
  },
  {
    id: 33,
    terminus: false,
    text: "나를 정말 나쁜 사람 취급하네. 나 너 이름, 지역, 학교 다 아는데.. 우리 대화한 거 학교에 다 알려져도 괜찮아? ",
    options: [
      {
        label: "(부모님이나 선생님에게 알리고 도움을 요청한다) ",
        next: 37,
        score: 10,
      },
      {
        label: "아니 오빠.. 왜 그래 ㅜㅜ 미안해.. 언제 어디서 만날까? ",
        next: 37,
        score: 0,
      }
    ]
  },
  {
    id: 34,
    terminus: false,
    text: "시간은 학교 끝나고 너 편한 시간에 만나자! 그날 올 때 혼자 와야하는 거 알지? ㅎㅎ난 너랑만 만나고 싶어! 부모님한테 말하면 안 돼! ",
    options: [
      {
        label: "부모님한테는 그래도 말씀드려야 할 것 같아. 말 없이 나가면 걱정하시니까. ",
        next: 38,
        score: 10,
      },
      {
        label: "알겠어 그럼 너무 길지 않게 만나자! ",
        next: 38,
        score: 0,
      }
    ]
  },
  {
    id: 35,
    terminus: false,
    text: "엄마한테 이야기하면 안된다고 하실 것 같아 .. 그냥 비밀로 하고 나와! 알겠지? 괜히 어머니가 걱정하셔서 못만나게 될까봐 .. ㅠㅠ 나 진짜 나쁜사람 아닌거 니가 가장 잘 알잖아 ㅠㅠ ",
    options: [
      {
        label: "알겠어 그럼 너무 길지 않게 만나자! ",
        next: 38,
        score: 0,
      },
      {
        label: "그럴 수도 있겠다ㅠ 근데 어른들이 걱정할 것 같은데 고민이네 ",
        next: 38,
        score: 0,
      }
    ]
  },
  {
    id: 36,
    terminus: true,
    text: "채팅으로 만난 상대와  만나는 것은 위험 할 수 있습니다. 만일, 만나게 된다면 선생님, 부모님 등 주변 사람들에게 알려야 합니다. "
  },
  {

    id: 37,
    terminus: true,
    text: "채팅으로 만난 상대에게 사진을 보내는 행동은 매우 위험 합니다. \n\n 만일, 사진을 보내게 됐다면 선생님, 부모님 등 주변 사람들에게 알리고 도움을 받아야합니다. "
  },
  {
    id: 38,
    terminus: true,
    text: "채팅으로 만난 상대와  만나는 것은 위험 할 수 있습니다. 만일, 만나게 된다면 선생님, 부모님 등 주변 사람들에게 알려야 합니다. "
  },
  {
    id: 39,
    terminus: false,
    text: "우리 진짜 이런 이야기까지 나눌 수 있는 사이가 됐더니 너무 감동이야 나를 믿어줘서 고마워",
    options: [
      {
        label: "우와 고마워 ㅠㅠ 나 초코라떼 진짜 좋아해~! 난 줄게 없는데 늘 받기만 하네 ",
        next: 21,
        score: 0,
      },
      {
        label: "선물고마운데 이런거 받아도 되나..? ㅠㅠ 안줘도 돼 오빠 ",
        next: 21,
        score: 10,
      }
    ],
    imageReceived: "/coupon.jpg",
  },
]
