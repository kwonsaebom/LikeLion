"use strict";
"use strict";

//반복적으로 생성될 객체 도출...

// member: {
//   id: 'jangyj',
//   nickname: '장유진',
//   photo: 'jangyj.png'
// },
//객체가 가지는 데이터를 생성자 함수 내에서 발생하는가?
//외부에서 전달받아야 하는가?
function Member(id, nickname, photo) {
  this.id = id;
  this.nickname = nickname;
  this.photo = photo;
}

// {
//   id: 'thumbsup',
//   count: 3,
//   members: ['jska2w3', 'donghyanoh', 'idoyeong5696'],
//   add: function (id) {
//     this.count++
//     this.members.push(id)
//   }
// }
function Emoji(emojiId) {
  this.emojiId = emojiId;
  this.count = 0;
  this.members = [];
  this.add = function (memberId) {
    this.count++;
    this.members.push(memberId);
  };
}

function Message(msg, member) {
  this.msgId = ++msgId;
  this.msg = msg;
  this.member = member;
  this.date = new Date().toLocaleString();
  this.emojis = [];
  this.addEmoji = function (emojiId, memberId) {
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  };
}

// 전체 채팅 메시지가 저장되는 배열, Message 객체 여러개가 저장
let messages = [];

// 채팅 메시지를 식별해야 이모지를 어디에 추가할 것인지 결정할 수 있음
// 1씩 증가시켜 신규 발생 채팅 메시지 식별자 id로 사용하기 위해
let msgId = 0;

// 필요한 dom node 객체 획득
let nicknameInputNode = document.getElementById("nickname");
let idInputNode = document.getElementById("idInput");
let msgInputNode = document.getElementById("msgInput");
// 최종 동적으로 양산된 채팅 글이 찍힐 위치
let chatMainNode = document.getElementById("chat-main");

// 매개변수로 전달된 객체의 내용을 node로 만들어서 출력시키는 함수
function printMessage(message) {}
function send(e) {
  e.preventDefault(); // form 내부에 있는 이벤트는 일단 막기!!

  // 유저 입력 데이터 추출
  let id = idInputNode.value;
  let nickname = nicknameInputNode.value;
  let msg = msgInputNode.value;

  // 유효성 검증
  if (
    id.trim().length == 0 ||
    (nickname.trim().length == 0) | (msg.trim().length == 0)
  ) {
    alert("아이디, 닉네임과 메시지를 입력해야 합니다.");
    return;
  }
  // 화면에 동적 노드 만들어서 출력
  printMessage();
}

function printEmoji(message) {}
// 이모자 추가 클릭 이벤트 처리
function emojiClick(count, type) {
  // 동적으로 이모지를 메시지에 출력
}
