import java.util.List;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        // 한글 자음 리스트
        List<Character> consonants = List.of(
                'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
                'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
        );

        // ㅅ ㅃ
        // ㅁ ㄹ
        // ㄷ ㄴ
        // ㄴ ㄲ
        System.out.println('ㅅ' - 0); // 12613
//        System.out.println('ㅂㅅ' - 0); // 12612
//        System.out.println(Character.toString(12612));
        System.out.println('ㅃ' - 0); // 12611

        System.out.println('ㅁ' - 0); // 12608
//        System.out.println('ㄹㅍ' - 0); // 12607
//        System.out.println('ㄹㅌ' - 0); // 12606
//        System.out.println('ㄹㅅ' - 0); // 12605
//        System.out.println('ㄹㅂ' - 0); // 12604
//        System.out.println('ㄹㅁ' - 0); // 12603
//        System.out.println('ㄹㄱ' - 0); // 12602
//        System.out.println(Character.toString(12607));
//        System.out.println(Character.toString(12606));
//        System.out.println(Character.toString(12605));
//        System.out.println(Character.toString(12604));
//        System.out.println(Character.toString(12603));
//        System.out.println(Character.toString(12602));
        System.out.println('ㄹ' - 0); // 12601




        System.out.println('ㄷ' - 0); // 12599
//        System.out.println('ㄴㅎ' - 0); // 12598
//        System.out.println('ㄴㅈ' - 0); // 12597
//        System.out.println(Character.toString(12598));
//        System.out.println(Character.toString(12597));
        System.out.println('ㄴ' - 0); // 12596

        System.out.println('ㄴ' - 0); // 12596
//        System.out.println('ㄱㅅ' - 0); // 12595
        System.out.println('ㄲ' - 0); // 12594


        System.out.println('갛' - '가');
        System.out.println('걯' - '가');
        System.out.println('꺻' - '까');
        System.out.println('곟' - '거');
        System.out.println('꼫' - '꺼');
        System.out.println('굏' - '고');
        System.out.println('귛' - '구');
        System.out.println('긯' - '그');
        System.out.println('기' - '긯');

        int a = 20;
        System.out.println(Character.toString('가' + ((a + 1) * 27 + a)));


//        System.out.println('개' - '갛');
//        System.out.println('갸' - '갷');
//        System.out.println('닿' - '다');
//        System.out.println('핳' - '하');
//        System.out.println('ㅣ' - 'ㅏ');
//        System.out.println('하' - '가');
//        System.out.println('ㄲ' - 'ㄱ');
//        System.out.println('ㄴ' - 'ㄲ');


//        20 27


        // 한글 모음 리스트
        List<Character> vowels = List.of(
                'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ',
                'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ',
                'ㅡ', 'ㅢ', 'ㅣ'
        );



//        List<Character> a= consonants.stream().sorted((c1, c2) -> c2 - c1).collect(Collectors.toUnmodifiableList());
//        System.out.println(a);


//         for (int i = 0; i < a.size() - 1; i++) {
//             System.out.println(a.get(i) +"" + a.get(i + 1));
//             System.out.println(a.get(i) - a.get(i + 1));
//         }

    }

    //SELECT *
    //FROM your_table
    //WHERE your_column BETWEEN '가' AND '갛';

    //SELECT UNICODE('가'); -- 44032
    //SELECT UNICODE('갛'); -- 44159
}