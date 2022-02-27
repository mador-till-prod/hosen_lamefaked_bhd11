/************************     הוראות חשובות      ***********************/

/**
 
 1.   במידה וזאת פעם ראשונה שלכם ממלאים תוכן בלומדה, קראו את **קובץ הוורד** המצורף בתקייה
 2.   בעמוד זה יש למלא את הפרטים לגבי כל המידע והתוכן המבוקש
 3.   [amountOfQuestions במשתנה] לשים לב שבכל נושא צריך לכתוב את *כמות השאלות המקסימלית* שתלקח ממנו
      **משתנה זה מתייחס רק לשאלות שיילקחו בשביל **המבחן
 */


/************************      הכנס כותרת ראשית שהיא שם הלומדה      ***********************/
const TITLE = "לומדת חוסן למפקד מחלקה";

/************************      הכנס כמות זמן התחלתית של המבחן      ***********************/
const TIME_FOR_EXAM = "7:00";

// אובייקט המכיל את כל המידע של הלומדה הכולל את התוכן, השאלות לכל נושא וכמות השאלות שיילקח מכל נושא למבחן
const DATA = { 
    // שם נושא
    "לומדת חוסן למפקד" : {
        "icon":  "../assets/images/opening/hand.svg", // הכנס קישור של אייקון
        // שאלות לנושא הזה
        "questions": [
        ],
        "amountOfQuestions": 2,
        "learningContent": {
            'מטרת הלומדה': {
                'מטרות': [ 
                    {
                        cardType: "listDots3",
                        numList : `3`,
                        li1: `היכרות כללית עם גורמי בריאות הנפשי`,
                        li2: `העלאת המודעות בנושא מצוקה נפשית בקרב חיילים`,
                        li3: `מתן כלים להתמודדות פיקודית`,
                    },
                ],
                'למה זה חשוב?': [ 
                    {
                        cardType: "text",
                        content: `
                        כאשר חייל חדש מגיע ליחידה ולמערכת הצבאית בכלל, הוא עובר תאריך הסתגלות. המפגש בין עולמו של החייל לעולם הצבאי, בחלק מן המקרים עלול לעורר מצוקה נפשית בקרבם של חלק מהמשרתים. החיילים המגיעים בשערי הצבא נושאים עימם מטענים שונים ומגוונים ולכן חשוב מאוד שהמפקד יכיר בכך ויהיה מודע לעניין ההסתגלות של הפרט למערכת
                        `,
                    },
                ],
            },
            'הקב"ן- קצין בריאות הנפש': {
                'מיהו ומה תפקידו?': [ 
                    {
                        cardType: "textThreeParagraphs",
                        text1: `לא בכל יחידה משרת קב"ן ולכן חשוב להכיר מי הוא הגורם בריאות הנפש שנותן מענה ליחידה.`,
                        text2: `תפקידו של הקב"ן הוא אבחון מצבו של החייל והענקת טיפול נפשי אל מול הצורך. כמו כן הקב"ן ייתן ייעוץ לך, המפקד, להמשך תהליך עם החייל.`,
                        text3: `במידת הצורך הקב"ן יבצע מעקב אחר טיפול מיטבי בחייל.  `,
                    },
                ],
                'הפניית חייל לקב"ן יכולה להתבצע במספר דרכים:': [ 
                    {
                        cardType: "listDots3",
                        numList : `3`,
                        li1: `מפקדו של החייל מפנה את החייל לקב"ן`,
                        li2: `רופא היחידה/חופ"ל מפנה את החייל לקב"ן`,
                        li3: `החייל עצמו פונה לקב"ן דרך מפקדו / גורם רפואי ביחידה`,
                    },
                    {
                        cardType: "textTwoParagraphs",
                        text1: `החייל לא חייב לשתף אותך, המפקד, בתהליך. אך במידה ופנה אלייך, רצוי לברר מה סיבת פנייתו ולהסביר לחייל את תפקידו של הקב"ן טרם המפגש.`,
                        text2: `שים לב, שכל חייל המבקש לפגוש גורם בריאות הנפש, נדרש בחוות דעת מפקד.`,
                    },
                ],
            },
            'מצוקה נפשית': {
                'הגדרה': [ 
                    {
                        cardType: "text",
                        content: `מצוקה נפשית הוא מצב בו קיים חוסר התאמה בין הדרישות המופעלות על החייל לבין יכולתו להתמודד ולהסתגל אליהם`,
                    },
                ],
                'סימני המצוקה יכולים לבוא לידי ביטוי בדרכים שונות:': [ 
                    {
                        cardType: "listDots3",
                        numList : `5`,
                        li1: `סימנים גופניים – תלונות גופניות מרובות, הפרעות בשינה, סימנים פסיכוסומטיים, הפרעות בתיאבון.`,
                        li2: `סימנים גופניים-התנהגותיים – ירידה בתפקוד, התבודדות, שינוי בהתנהגות, הזנחה, התנהגות אלימה. `,
                        li3: `סימנים התנהגותיים-רגשיים – פחדים, חרדות, דיכאון, חוסר מוצא.`,
                        li4: `סימנים רגשיים – קוגניטיביים – קשיים בתפיסה, ריכוז וקבלת החלטות, בלבול, ניתוק.`,
                        li5: `סימנים חריגים – פגיעה עצמית, רמזים לכוונות אובדניות, התנהגות שאינה תואמת את המציאות.`,
                    },
                ],
            },
            'איתור מצוקות': {
                'אוכלוסיות רגישות לאיתור סימני מצוקה:': [ 
                    {
                        cardType: "listDots3",
                        numList : `7`,
                        li1: `עולים חדשים`,
                        li2: `חוויות של דחייה וכישלון`,
                        li3: `אירוע משברי`,
                        li4: `מצב סוציו-אקונומי`,
                        li5: `ניסיונות אובדניים או פגיעה עצמית בעבר`,
                        li6: `חיילים ששוחררו מהכלא`,
                        li7: `מדד שק"ד (מדד המוגדר במערכות המשא"ן המנבא "שרידות" של חייל בשירות)`,
                    },
                ],
                'כלים לאיתור מצוקות , התערבות וסיוע': [ 
                    {
                        cardType: "listDots3",
                        numList : `12`,
                        li1: `ראיון רשמי בעת כניסה ליחידה.`,
                        li2: `שיחות שאינן רשמיות. `,
                        li3: `שיחות אישיות יזומות. `,
                        li4: `ביקורי בית.`,
                        li5: `חיזוקים חיוביים ומישוב שוטף.`,
                        li6: `רתימת הורים – במקרים חריגים.`,
                        li7: `שגרת מחלקה. `,
                        li8: `איסוף מידע מהסובבים את החייל.`,
                        li9: `הפנייה לראיון אצל מפקד בכיר.`,
                        li10: `הקלות זמניות פיקודיות – במקרים חריגים. `,
                        li11: `הצעה להפנות את החייל לקב"ן.`,
                        li12: `שיח עם משק"ית הת"ש`,
                    },
                ],
                'דגשים לניהול ראיון/שיחה עם :חייל': [ 
                    {
                        cardType: "listDots3",
                        numList : `4`,
                        li1: `התאמת המיקום, הזמן והאווירה בה מתבצע הראיון. `,
                        li2: `שאילת שאלות פתוחות.`,
                        li3: `הקשבה, הבנה ומתן תשומת לב לחייל ולדבריו.`,
                        li4: `תשומת לב לשפת גופו של החייל. `,
                    },
                ],
            },
            'מניעת אובדנות': {
                'מניעת אירועי אובדנות': [ 
                    {
                        cardType: "listDots3",
                        numList : `4`,
                        li1: `אנשים מתאבדים כדי להימלט ממצב נפשי בלתי נסבל וכי אינם רואים מוצא באותו הרגע.`,
                        li2: `מרבית האנשים האובדניים רוצים לחיות.`,
                        li3: `המשבר האובדני בדרך כלל נמשך זמן מוגבל ועובר לאחר קבלת עזרה וייעוץ מקצועיים. `,
                        li4: `מניעת אובדנות הינה משימה משותפת של מפקדי החייל, הסובבים אותו ביחידתו וגורמי בריאות הנפש.`,
                    },
                ],
                ' דגשים לניהול שיחה בעת איתור מצוקה נפשית המרמזת על אובדנות': [ 
                    {
                        cardType: "listDots3",
                        numList : `5`,
                        li1: `פנה זמן להקשבה ובחר מקום שקט שיאפשר שיחה פתוחה ושמירה על פרטיות החייל.`,
                        li2: `אל תתחייב לסודיות – שכן יש דברים שאתה מחויב לדווח עליהם.`,
                        li3: `שאל שאלות הנוגעות למצב רוחו של החייל – לדוגמא "נשמע שהיה לך קשה, אתה מרגיש עצוב/מפוחד/עצבני/מדוכא?" או "שמתי לך שהתפקוד שלך בתקופה האחרונה נפגע – קשה לך? משהו מטריד אותך?"`,
                        li4: `שאל שאלות על אירועים דומים שהתרחשו בעבר – לדוגמא "האם היית פעם במצב דומה? איך נהגת לפתור את המצוקה שלך בעבר?"`,
                        li5: `בהתאם לחשד – שאל שאלות לגבי אובדנות – "היו לך מחשבות בעבר על אובדנות? התכוונת לבצע אותן?"`,
                    },
                ],
                'סדר פעולות בעת גילוי מצוקה': [ 
                    {
                        cardType: "text",
                        content: `כאשר עולה חשד לאובדנות אצל החייל עלייך לפעול במיידי וברגישות רבה:<ul class="list">
                        <li>יש להתייעץ עם מפקד בכיר, רופא או קב"ן.</li><li>יש להרחיק אמצעים קטלניים וגישה לכלי נשק. </li><li>יש להשאיר את החייל תחת השגחה של שני חיילים למען מניעת פגיעה עצמית/סביבתית. </li><li>יש לוודא היכרות עם גורמי ברה"ן ומשא"ן ודרכי תקשורת לפנייה מיידית.</li></ul>`,
                    },
                ],
            },
            'סיכום': {
                'כמה טיפים לסיכום': [ 
                    {
                        cardType: "textTwoParagraphs",
                        text1: `<ul class="list">
                        <li>היה עירני לחיילייך וצרכיהם.</li><li>אל תבטיח דבר שלא תוכל לעמוד בו.</li><li>במסגרת השיחות האישיות והראיונות, תן את מלוא הקשב לחייליך – שידעו שיש להם למי לפנות. </li><li>השתמש בכלים הפיקודיים שניתנו לך על מנת לזהות מצוקה בקרב חייליך, במידה ויש, ולטפל בה בזמן. </li><li>בכל שאלה או ספק מומלץ לפנות לגורם המקצועי. </li></ul>`,
                        text2: `כל אדם הוא עולם ומלואו, מאחלים לך בהצלחה בפיקוד!
                        `,
                    },
                ],
            },
        },
    },
};



/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

/**
 * @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.textTwoParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
    }
}

CARD_TYPES.textThreeParagraphs = {
    init(card, json) {
        card.querySelector(".text1").innerHTML = json.text1;
        card.querySelector(".text2").innerHTML = json.text2;
        card.querySelector(".text3").innerHTML = json.text3;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.twoPics = {
    init(card, json) {
        card.querySelector(".pic1").src = json.pic1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".pic2").src = json.pic2;
        card.querySelector(".content2").innerHTML = json.content2;
    }
}
CARD_TYPES.video = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
    }
}
CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
    }
}
CARD_TYPES.pic_4titles_4text = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
        card.querySelector(".sub-title4").innerHTML = json.subTitle4;
        card.querySelector(".content4").innerHTML = json.content4;
    }
}
CARD_TYPES._3titles_3text = {
    init(card, json) {
        card.querySelector(".sub-title1").innerHTML = json.subTitle1;
        card.querySelector(".content1").innerHTML = json.content1;
        card.querySelector(".sub-title2").innerHTML = json.subTitle2;
        card.querySelector(".content2").innerHTML = json.content2;
        card.querySelector(".sub-title3").innerHTML = json.subTitle3;
        card.querySelector(".content3").innerHTML = json.content3;
    }
}
CARD_TYPES.listDots3 = {
    init(card, json) {
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}
CARD_TYPES.listDots3 = {
    init(card, json) {
        // card.querySelector(".sub-title").innerHTML = json.subTitle;
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}