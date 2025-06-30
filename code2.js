gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDQuestionsObjects1= [];
gdjs.GameCode.GDQuestionsObjects2= [];
gdjs.GameCode.GDTalker_95952Objects1= [];
gdjs.GameCode.GDTalker_95952Objects2= [];
gdjs.GameCode.GDGood_9595jobObjects1= [];
gdjs.GameCode.GDGood_9595jobObjects2= [];
gdjs.GameCode.GDDragonObjects1= [];
gdjs.GameCode.GDDragonObjects2= [];
gdjs.GameCode.GDBG1Objects1= [];
gdjs.GameCode.GDBG1Objects2= [];
gdjs.GameCode.GDSpinObjects1= [];
gdjs.GameCode.GDSpinObjects2= [];
gdjs.GameCode.GDBackObjects1= [];
gdjs.GameCode.GDBackObjects2= [];
gdjs.GameCode.GDAObjects1= [];
gdjs.GameCode.GDAObjects2= [];
gdjs.GameCode.GDBObjects1= [];
gdjs.GameCode.GDBObjects2= [];
gdjs.GameCode.GDCObjects1= [];
gdjs.GameCode.GDCObjects2= [];
gdjs.GameCode.GDDObjects1= [];
gdjs.GameCode.GDDObjects2= [];
gdjs.GameCode.GDRetryObjects1= [];
gdjs.GameCode.GDRetryObjects2= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.GameCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.GameCode.GDBObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.GameCode.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.GameCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Good_job"), gdjs.GameCode.GDGood_9595jobObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDBObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDCObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.GameCode.GDDObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDGood_9595jobObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGood_9595jobObjects1[i].hide();
}
}}

}


};gdjs.GameCode.userFunc0xf1af28 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Initialize quiz state
if (!runtimeScene.quizState) {
  runtimeScene.quizState = {
    currentQuestion: 0,
    score: 0,
    done: false,
    questions: [
      {
        text: "What drink helps your body stay cool and work well?",
        options: { A: "Soda", B: "Milk", C: "Water", D: "Juice" },
        correct: "C",
        feedback: "Water helps your body stay hydrated."
      },
      {
        text: "Why is moving your body like playing tag or jumping helpful?",
        options: { A: "It makes you tired", B: "It helps you sweat", C: "It helps your heart, muscles, and mood", D: "It wastes time" },
        correct: "C",
        feedback: "Movement helps your heart, muscles, and mood."
      },
      {
        text: "What snack helps give you long-lasting energy?",
        options: { A: "Apple with peanut butter", B: "Candy", C: "Chips", D: "Soda" },
        correct: "A",
        feedback: "Apple with peanut butter gives fiber and protein."
      },
      {
        text: "What should you do when you're feeling big emotions?",
        options: { A: "Hide", B: "Talk or breathe deeply", C: "Yell", D: "Ignore them" },
        correct: "B",
        feedback: "Talking or deep breaths help calm your brain."
      },
      {
        text: "Why is sleep important for your health?",
        options: { A: "It makes you lazy", B: "It helps your brain, muscles, and feelings rest", C: "It wastes time", D: "It helps you stay awake" },
        correct: "B",
        feedback: "Sleep helps your brain, muscles, and feelings rest."
      },
      {
        text: "What does your body need more of when it’s hot or you're playing a lot?",
        options: { A: "Milk", B: "Juice", C: "Water", D: "Soda" },
        correct: "C",
        feedback: "Water keeps your body cool and helps during play."
      },
      {
        text: "What’s a great reason to stretch your body?",
        options: { A: "Keeps your muscles ready to move", B: "It hurts", C: "Makes you sleepy", D: "Wastes time" },
        correct: "A",
        feedback: "Stretching keeps your muscles ready to move."
      },
      {
        text: "What’s one way to listen to your body when you eat?",
        options: { A: "Eat fast", B: "Eat everything", C: "Eat when you're bored", D: "Stop when you feel full" },
        correct: "D",
        feedback: "Stop when you feel full."
      },
      {
        text: "Which of these is a helpful way to calm big feelings?",
        options: { A: "Ignore them", B: "Eat snacks", C: "Talk or breathe", D: "Watch TV" },
        correct: "C",
        feedback: "Talking or breathing helps you feel in control."
      },
      {
        text: "Why is getting enough sleep good for your body?",
        options: { A: "It wastes time", B: "It helps you eat more", C: "It helps your body recharge and grow", D: "It makes you lazy" },
        correct: "C",
        feedback: "Sleep helps your body recharge and grow."
      },
      {
        text: "What food is best for energy before playing?",
        options: { A: "Candy", B: "Fruit and yogurt", C: "Chips", D: "Cake" },
        correct: "B",
        feedback: "Fruit and yogurt provide lasting energy."
      },
      {
        text: "What helps your brain stay sharp?",
        options: { A: "Watching TV", B: "Deep sleep", C: "Skipping meals", D: "Yelling" },
        correct: "B",
        feedback: "Deep sleep helps your brain stay sharp."
      },
      {
        text: "When you’re thirsty, what should you drink?",
        options: { A: "Soda", B: "Coffee", C: "Water", D: "Juice" },
        correct: "C",
        feedback: "Water is the best for staying hydrated."
      },
      {
        text: "How can you show kindness to others?",
        options: { A: "Ignore them", B: "Yell", C: "Help them", D: "Run away" },
        correct: "C",
        feedback: "Helping others is a way to be kind."
      },
      {
        text: "What is one benefit of fresh air?",
        options: { A: "It smells bad", B: "It makes you tired", C: "It helps you feel awake", D: "It gives you sugar" },
        correct: "C",
        feedback: "Fresh air helps you feel more awake and refreshed."
      },
      {
        text: "Why is eating breakfast important?",
        options: { A: "It gives you morning energy", B: "It makes you slow", C: "It wastes time", D: "It helps you sleep" },
        correct: "A",
        feedback: "Breakfast gives your body energy to start the day."
      },
      {
        text: "How does your body tell you it’s tired?",
        options: { A: "By laughing", B: "By singing", C: "By yawning", D: "By jumping" },
        correct: "C",
        feedback: "Yawning and heavy eyes are signs of tiredness."
      },
      {
        text: "What food helps build strong muscles?",
        options: { A: "Cookies", B: "Protein like beans or meat", C: "Sweets", D: "Soda" },
        correct: "B",
        feedback: "Protein-rich foods help build strong muscles."
      },
      {
        text: "Why should you eat fruits and vegetables?",
        options: { A: "They look fun", B: "They taste bad", C: "They give vitamins and fiber", D: "They are boring" },
        correct: "C",
        feedback: "Fruits and vegetables are full of vitamins and fiber."
      },
      {
        text: "What does your body need when you sweat a lot?",
        options: { A: "More soda", B: "More sugar", C: "More water", D: "Less food" },
        correct: "C",
        feedback: "Sweating means your body needs more water."
      },
      {
        text: "What helps your body grow stronger while you sleep?",
        options: { A: "Staying up late", B: "Eating snacks", C: "Resting well", D: "Watching TV" },
        correct: "C",
        feedback: "Rest helps your body grow and repair itself."
      },
      {
        text: "How can you calm down when you're upset?",
        options: { A: "Run away", B: "Take deep breaths", C: "Cry loudly", D: "Hit something" },
        correct: "B",
        feedback: "Deep breathing calms your brain and body."
      },
      {
        text: "Why is it good to play outside?",
        options: { A: "You get sun and exercise", B: "You get dirty", C: "You get bored", D: "You avoid homework" },
        correct: "A",
        feedback: "Sunlight and movement help your health."
      },
      {
        text: "What helps your bones stay strong?",
        options: { A: "Calcium and movement", B: "Staying still", C: "Sweets", D: "Juice" },
        correct: "A",
        feedback: "Calcium and exercise keep bones strong."
      },
      {
        text: "What can you do if your friend is sad?",
        options: { A: "Laugh", B: "Ignore", C: "Help and talk", D: "Run away" },
        correct: "C",
        feedback: "Helping and listening shows kindness."
      }
    ]
  };

  // Show first question
  const q = runtimeScene.quizState.questions[0];
  const qText = runtimeScene.getObjects("Questions")[0];
  const talker = runtimeScene.getObjects("Talker_2")[0];
  qText.setString("Q1: " + q.text + "\nA. " + q.options.A + "\nB. " + q.options.B + "\nC. " + q.options.C + "\nD. " + q.options.D);
  talker.setString(""); // clear feedback
}

// Button handlers
const buttons = { A: "A", B: "B", C: "C", D: "D" };

for (let key in buttons) {
  const btn = runtimeScene.getObjects(buttons[key])[0];
  if (btn && btn.IsClicked()) {
    const state = runtimeScene.quizState;
    const qText = runtimeScene.getObjects("Questions")[0];
    const talker = runtimeScene.getObjects("Talker_2")[0];
    const question = state.questions[state.currentQuestion];

    // Check answer
    if (key === question.correct) {
      state.score++;
      talker.setString("✅ Correct! " + question.feedback);

      // Move to next question
      state.currentQuestion++;

      if (state.currentQuestion >= state.questions.length) {
        qText.setString("🎉 Quiz finished! Score: " + state.score + "/" + state.questions.length);
        runtimeScene.getVariables().get("Done").setBoolean(true);
      } else {
        const next = state.questions[state.currentQuestion];
        qText.setString("Q" + (state.currentQuestion + 1) + ": " + next.text
          + "\nA. " + next.options.A
          + "\nB. " + next.options.B
          + "\nC. " + next.options.C
          + "\nD. " + next.options.D);
        talker.setString(""); // clear feedback
      }
    } else {
      // Stay on current question
      talker.setString("❌ That's not right. Try again.\nHint: " + question.feedback);
    }

    break;
  }
}

};
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.GameCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBackObjects1[k] = gdjs.GameCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRetryObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRetryObjects1[k] = gdjs.GameCode.GDRetryObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mouse-click-290204.mp3", false, 100, 1);
}}

}


{


gdjs.GameCode.userFunc0xf1af28(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A"), gdjs.GameCode.GDAObjects1);
gdjs.copyArray(runtimeScene.getObjects("B"), gdjs.GameCode.GDBObjects1);
gdjs.copyArray(runtimeScene.getObjects("C"), gdjs.GameCode.GDCObjects1);
gdjs.copyArray(runtimeScene.getObjects("D"), gdjs.GameCode.GDDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Good_job"), gdjs.GameCode.GDGood_9595jobObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDBObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDCObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDDObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDGood_9595jobObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGood_9595jobObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDAObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDQuestionsObjects1.length = 0;
gdjs.GameCode.GDQuestionsObjects2.length = 0;
gdjs.GameCode.GDTalker_95952Objects1.length = 0;
gdjs.GameCode.GDTalker_95952Objects2.length = 0;
gdjs.GameCode.GDGood_9595jobObjects1.length = 0;
gdjs.GameCode.GDGood_9595jobObjects2.length = 0;
gdjs.GameCode.GDDragonObjects1.length = 0;
gdjs.GameCode.GDDragonObjects2.length = 0;
gdjs.GameCode.GDBG1Objects1.length = 0;
gdjs.GameCode.GDBG1Objects2.length = 0;
gdjs.GameCode.GDSpinObjects1.length = 0;
gdjs.GameCode.GDSpinObjects2.length = 0;
gdjs.GameCode.GDBackObjects1.length = 0;
gdjs.GameCode.GDBackObjects2.length = 0;
gdjs.GameCode.GDAObjects1.length = 0;
gdjs.GameCode.GDAObjects2.length = 0;
gdjs.GameCode.GDBObjects1.length = 0;
gdjs.GameCode.GDBObjects2.length = 0;
gdjs.GameCode.GDCObjects1.length = 0;
gdjs.GameCode.GDCObjects2.length = 0;
gdjs.GameCode.GDDObjects1.length = 0;
gdjs.GameCode.GDDObjects2.length = 0;
gdjs.GameCode.GDRetryObjects1.length = 0;
gdjs.GameCode.GDRetryObjects2.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);
gdjs.GameCode.GDQuestionsObjects1.length = 0;
gdjs.GameCode.GDQuestionsObjects2.length = 0;
gdjs.GameCode.GDTalker_95952Objects1.length = 0;
gdjs.GameCode.GDTalker_95952Objects2.length = 0;
gdjs.GameCode.GDGood_9595jobObjects1.length = 0;
gdjs.GameCode.GDGood_9595jobObjects2.length = 0;
gdjs.GameCode.GDDragonObjects1.length = 0;
gdjs.GameCode.GDDragonObjects2.length = 0;
gdjs.GameCode.GDBG1Objects1.length = 0;
gdjs.GameCode.GDBG1Objects2.length = 0;
gdjs.GameCode.GDSpinObjects1.length = 0;
gdjs.GameCode.GDSpinObjects2.length = 0;
gdjs.GameCode.GDBackObjects1.length = 0;
gdjs.GameCode.GDBackObjects2.length = 0;
gdjs.GameCode.GDAObjects1.length = 0;
gdjs.GameCode.GDAObjects2.length = 0;
gdjs.GameCode.GDBObjects1.length = 0;
gdjs.GameCode.GDBObjects2.length = 0;
gdjs.GameCode.GDCObjects1.length = 0;
gdjs.GameCode.GDCObjects2.length = 0;
gdjs.GameCode.GDDObjects1.length = 0;
gdjs.GameCode.GDDObjects2.length = 0;
gdjs.GameCode.GDRetryObjects1.length = 0;
gdjs.GameCode.GDRetryObjects2.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
