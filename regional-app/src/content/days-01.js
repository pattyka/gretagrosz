// New days for the Grundlagen phase. Keys are plan days (1–150).
// Every answer was checked by computer.
export default {
  2: {
    lesson: {
      idea: 'Divisibility rules come from remainders of powers of 10. Since 10 ≡ 1 (mod 3) and (mod 9), a number has the same remainder as its digit sum. Since 10 ≡ −1 (mod 11), it has the same remainder as its alternating digit sum. For 2, 4, 8 only the last 1, 2, 3 digits matter, because 10, 100, 1000 are divisible by 2, 4, 8. For 6, 12, 36, … split into coprime factors.',
      steps: ['2, 5: last digit. 4: last two digits. 8: last three digits.', '3, 9: digit sum. 11: alternating digit sum (from the right: + − + −).', '6 = 2·3, 12 = 3·4, 36 = 4·9: check each coprime factor.'],
      example: {
        q: 'Is 918082 divisible by 11?',
        a: 'Alternating sum from the right: 2 − 8 + 0 − 8 + 1 − 9 = −22, which is divisible by 11. So yes: 918082 = 11·83462.',
      },
      de: [['Teilbarkeitsregel', 'divisibility rule'], ['Ziffernsumme / Quersumme', 'digit sum'], ['alternierende Quersumme', 'alternating digit sum'], ['Ziffer', 'digit']],
    },
    problems: [
      {
        type: 'answer',
        q: 'The five-digit number 13a2b (a and b are digits) is divisible by 36.\n\nHow many such numbers are there?',
        answers: ['3'],
        hint: '36 = 4·9. Use the rule for 4 on the last two digits and the rule for 9 on the digit sum.',
        solution: 'Divisible by 4: the number 2b must be divisible by 4, so b ∈ {0, 4, 8}. Divisible by 9: 1 + 3 + a + 2 + b = 6 + a + b must be divisible by 9, so a + b = 3 or 12.\n\nb = 0 → a = 3; b = 4 → a = 8; b = 8 → a = 4. The numbers are 13320, 13824 and 13428: 3 numbers.',
      },
      {
        type: 'answer',
        q: 'How many four-digit numbers of the form abba (like 3443) are divisible by 11?',
        answers: ['90'],
        hint: 'Write abba as 1000a + 100b + 10b + a.',
        solution: 'abba = 1001a + 110b = 11·(91a + 10b), so every such number is divisible by 11. There are 9 choices for a (1–9) and 10 for b: 90 numbers.',
      },
      {
        type: 'proof',
        q: 'Prove that a positive integer is divisible by 3 if and only if the sum of its digits is divisible by 3.',
        hint: 'Write n = aₖ·10ᵏ + … + a₁·10 + a₀ and look at it modulo 3.',
        keySteps: ['Write n = aₖ·10ᵏ + … + a₁·10 + a₀ with digits aᵢ.', '10 ≡ 1 (mod 3), so 10ⁱ ≡ 1 (mod 3) for every i.', 'Hence n ≡ aₖ + … + a₁ + a₀ (mod 3): n and its digit sum have the same remainder.', 'So one is divisible by 3 exactly when the other is (both directions).'],
        solution: 'Let n = aₖ·10ᵏ + … + a₁·10 + a₀ with digits a₀, …, aₖ. Since 10 = 3·3 + 1, we have 10 ≡ 1 (mod 3), and therefore 10ⁱ ≡ 1ⁱ = 1 (mod 3) for all i. So\nn ≡ aₖ + … + a₁ + a₀ (mod 3),\ni.e. n and its digit sum leave the same remainder when divided by 3. In particular n is divisible by 3 if and only if its digit sum is.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'Prove that n⁵ − n is divisible by 30 for every integer n.',
      keySteps: ['n⁵ − n = (n − 1)n(n + 1)(n² + 1).', '(n − 1)n(n + 1) is divisible by 2 and 3 (consecutive integers).', 'For 5: n ≡ 0, ±1 makes one of n − 1, n, n + 1 divisible by 5; n ≡ ±2 gives n² + 1 ≡ 0 (mod 5).', '2, 3, 5 are pairwise coprime, so 30 divides n⁵ − n.'],
      solution: 'n⁵ − n = (n − 1)n(n + 1)(n² + 1). Three consecutive integers give divisibility by 2 and 3.\n\nFor 5: if n ≡ 0, 1 or 4 (mod 5), one of n, n − 1, n + 1 is divisible by 5. If n ≡ 2 or 3, then n² ≡ 4 and n² + 1 ≡ 0 (mod 5).\n\nSo 2, 3 and 5 divide n⁵ − n, hence 30 does.',
    },
  },

  4: {
    lesson: {
      idea: 'Product rule: if a choice happens in steps, with m options for the first step and n for the second (whatever you chose first), there are m·n results. Sum rule: if the cases don’t overlap, add them. Often it is easier to count the opposite (the complement) and subtract from the total.',
      steps: ['Split the choice into steps: how many options at each step?', 'Watch out for special first steps (a first digit can’t be 0).', 'If “at least one” appears, count the complement.'],
      example: {
        q: 'How many even three-digit numbers are there?',
        a: 'First digit 1–9 (9 options), middle digit 0–9 (10), last digit 0, 2, 4, 6, 8 (5): 9·10·5 = 450.',
      },
      de: [['Produktregel', 'product rule'], ['Summenregel', 'sum rule'], ['Anzahl', 'number (count)'], ['Man bestimme die Anzahl', 'determine the number']],
    },
    problems: [
      {
        type: 'answer',
        q: 'How many three-digit numbers have three different digits?',
        answers: ['648'],
        hint: 'Choose the first digit first (it can’t be 0), then the second, then the third.',
        solution: 'First digit: 9 options (1–9). Second: 9 (any digit except the first). Third: 8. Total 9·9·8 = 648.',
      },
      {
        type: 'answer',
        q: 'How many four-digit numbers contain at least one digit 7?',
        answers: ['3168'],
        hint: 'Count the four-digit numbers with no 7 at all, and subtract.',
        solution: 'There are 9000 four-digit numbers. Without any 7: first digit 8 options (1–9 except 7), the others 9 each: 8·9·9·9 = 5832. So 9000 − 5832 = 3168 contain a 7.',
      },
      {
        type: 'proof',
        q: 'Prove that a set with n elements has exactly 2ⁿ subsets (including the empty set and the whole set).',
        hint: 'Building a subset means deciding for each element: in or out?',
        keySteps: ['A subset is determined by deciding, for each of the n elements, whether it is in or out.', 'Each decision has 2 options, and the decisions are independent.', 'By the product rule there are 2·2·…·2 = 2ⁿ ways to decide.', 'Different ways of deciding give different subsets, and every subset arises, so there are exactly 2ⁿ subsets.'],
        solution: 'Let the elements be x₁, …, xₙ. To build a subset, decide for each xᵢ whether it belongs to the subset or not. That is n independent decisions with 2 options each, so by the product rule there are 2ⁿ possible sequences of decisions.\n\nEach sequence gives exactly one subset, and each subset comes from exactly one sequence (namely: xᵢ is “in” exactly when it belongs to the subset). So there are exactly 2ⁿ subsets.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'How many positive integers have digits that strictly increase from left to right (like 2579 or 8)? Prove your answer.',
      answers: ['511'],
      keySteps: ['The digit 0 can’t appear: it would have to be the first digit.', 'Such a number is determined by its set of digits, a non-empty subset of {1, …, 9}: write the digits in increasing order.', 'Every non-empty subset gives exactly one such number, and vice versa (a bijection).', 'There are 2⁹ − 1 = 511 non-empty subsets of {1, …, 9}.'],
      solution: 'In a number with strictly increasing digits, 0 could only be the first digit, which is not allowed. So all digits lie in {1, …, 9} and are different.\n\nMap each such number to its set of digits, a non-empty subset of {1, …, 9}. Conversely, every non-empty subset gives exactly one such number: write its elements in increasing order. So the numbers correspond one-to-one to the non-empty subsets, and there are 2⁹ − 1 = 511 of them.',
    },
  },

  5: {
    lesson: {
      idea: 'Two triangles are congruent (identical in shape and size) if they agree in SSS (three sides), SWS (two sides and the angle between them), WSW (one side and the two angles on it) or SsW (two sides and the angle opposite the longer one). Congruent triangles have all sides and angles equal. To prove two lengths or angles are equal, find two triangles that contain them and show they are congruent.',
      steps: ['Find two triangles containing the segments or angles you want.', 'Collect three matching pieces: equal sides, equal angles (vertical angles, right angles, common sides).', 'Name the rule (SSS, SWS, WSW, SsW) and write the corresponding vertices in the same order.'],
      example: {
        q: 'In triangle ABC, AB = AC and M is the midpoint of BC. Show that ∠ABC = ∠ACB.',
        a: 'Triangles ABM and ACM: AB = AC, BM = CM, AM is shared. By SSS they are congruent, so ∠ABM = ∠ACM.',
      },
      de: [['kongruent', 'congruent'], ['Kongruenzsatz', 'congruence rule'], ['Seite', 'side'], ['eingeschlossener Winkel', 'included angle']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In the convex quadrilateral ABCD, AB = AD and CB = CD. Also ∠BAD = 80° and ∠BCD = 60°.\n\nFind ∠ABC in degrees.',
        answers: ['110'],
        hint: 'Triangles ABC and ADC are congruent. Which angles does that make equal?',
        solution: 'Triangles ABC and ADC have AB = AD, CB = CD and the common side AC, so they are congruent (SSS) and ∠ABC = ∠ADC. The angles of the quadrilateral add up to 360°: 80° + 60° + 2·∠ABC = 360°, so ∠ABC = 110°.',
      },
      {
        type: 'answer',
        q: 'In triangle ABC, AB = AC and ∠BAC = 40°. Points D on AB and E on AC satisfy AD = AE, and ∠ABE = 20°. The segments BE and CD meet at P.\n\nFind ∠BPC in degrees.',
        answers: ['80'],
        hint: 'Show that triangles ABE and ACD are congruent.',
        solution: 'Triangles ABE and ACD: AB = AC, AE = AD and the common angle at A, so they are congruent (SWS) and ∠ACD = ∠ABE = 20°.\n\nThe base angles are ∠B = ∠C = 70°, so ∠PBC = 70° − 20° = 50° and ∠PCB = 50°. Hence ∠BPC = 180° − 50° − 50° = 80°.',
      },
      {
        type: 'proof',
        q: 'ABCD is a square. Points E on BC and F on CD satisfy BE = CF.\n\nProve that AE = BF and that AE is perpendicular to BF.',
        hint: 'Compare triangles ABE and BCF.',
        keySteps: ['Triangles ABE and BCF: AB = BC, BE = CF, ∠ABE = ∠BCF = 90°.', 'By SWS they are congruent, so AE = BF and ∠BAE = ∠CBF.', 'Let X be the intersection of AE and BF. ∠ABX = 90° − ∠CBF = 90° − ∠BAE.', 'In triangle ABX the angles at A and B add up to 90°, so ∠AXB = 90°.'],
        solution: 'In triangles ABE and BCF we have AB = BC (sides of the square), BE = CF (given) and ∠ABE = ∠BCF = 90°. By SWS they are congruent, so AE = BF and ∠BAE = ∠CBF.\n\nLet X be the intersection of AE and BF. Then ∠ABX = ∠ABC − ∠CBF = 90° − ∠BAE. In triangle ABX: ∠AXB = 180° − ∠BAX − ∠ABX = 180° − ∠BAE − (90° − ∠BAE) = 90°. So AE ⟂ BF.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'On the sides AB and AC of a triangle ABC, equilateral triangles ABD and ACE are drawn outwards.\n\nProve that BE = CD, and that the lines BE and CD meet at an angle of 60°.',
      keySteps: ['∠DAC = ∠DAB + ∠BAC = 60° + α and ∠BAE = ∠BAC + ∠CAE = α + 60°, so ∠DAC = ∠BAE.', 'Triangles DAC and BAE: AD = AB, AC = AE and the included angles are equal, so they are congruent (SWS) and CD = BE.', 'From the congruence ∠ADC = ∠ABE. Let X be where BE and CD meet: ∠ADX = ∠ABX, so A, D, B, X lie on a circle (or rotate by 60° about A, which maps D to B and C to E).', 'Then the angle between the lines is ∠DXB = ∠DAB = 60°.'],
      solution: 'Let α = ∠BAC. Then ∠DAC = 60° + α = ∠BAE. In triangles DAC and BAE we have AD = AB and AC = AE (equilateral triangles) and equal included angles, so they are congruent (SWS). Hence CD = BE.\n\nThe congruence also gives ∠ADC = ∠ABE. Let X be the intersection of BE and CD. Then the segment AX is seen from D and from B under equal angles (∠ADX = ∠ABX), so A, D, B, X lie on one circle. In that circle ∠DXB = ∠DAB = 60°, because both stand on the chord DB. So BE and CD meet at 60°.\n\n(Even quicker: the rotation by 60° about A maps D to B and C to E, so it maps the segment DC onto BE. A rotation by 60° keeps lengths and turns every line by 60°.)',
    },
  },

  7: {
    lesson: {
      idea: 'ax² + bx + c = 0 (a ≠ 0) is solved by completing the square: x = (−b ± √D)/(2a) with the discriminant D = b² − 4ac. If D > 0 there are two real solutions, if D = 0 exactly one, if D < 0 none. Many competition problems are really questions about the sign of a discriminant.',
      steps: ['Bring the equation to the form ax² + bx + c = 0.', 'Compute D = b² − 4ac and decide: two, one or no real solutions.', 'If you need a quadratic to be ≥ 0 for all x, you need a > 0 and D ≤ 0.'],
      example: {
        q: 'Solve x² − 6x + 5 = 0.',
        a: 'D = 36 − 20 = 16, so x = (6 ± 4)/2: x = 1 or x = 5. (Or factor: (x − 1)(x − 5) = 0.)',
      },
      de: [['quadratische Gleichung', 'quadratic equation'], ['Diskriminante', 'discriminant'], ['Lösungsformel', 'quadratic formula'], ['reelle Lösung', 'real solution']],
    },
    problems: [
      {
        type: 'answer',
        q: 'For which positive number k does x² + kx + 16 = 0 have exactly one real solution?',
        answers: ['8'],
        hint: 'Exactly one solution means the discriminant is 0.',
        solution: 'D = k² − 64 = 0 gives k = ±8. The positive value is k = 8 (then x² + 8x + 16 = (x + 4)², with the single solution x = −4).',
      },
      {
        type: 'answer',
        q: 'For how many integers k does x² + kx + 9 = 0 have no real solution?',
        answers: ['11'],
        hint: 'No real solution means D < 0.',
        solution: 'D = k² − 36 < 0 means −6 < k < 6, i.e. k = −5, −4, …, 5: 11 integers.',
      },
      {
        type: 'proof',
        q: 'Let a, b, c be real numbers. Prove that the equation\n\n(x − a)(x − b) + (x − b)(x − c) + (x − c)(x − a) = 0\n\nhas at least one real solution.',
        hint: 'Expand, then show the discriminant is ≥ 0 by writing it as a sum of squares.',
        keySteps: ['Expanding gives 3x² − 2(a + b + c)x + (ab + bc + ca) = 0.', 'D/4 = (a + b + c)² − 3(ab + bc + ca) = a² + b² + c² − ab − bc − ca.', 'This equals ½[(a − b)² + (b − c)² + (c − a)²] ≥ 0.', 'D ≥ 0, so there is a real solution.'],
        solution: 'Expanding: 3x² − 2(a + b + c)x + (ab + bc + ca) = 0. This is a quadratic with leading coefficient 3, and\nD/4 = (a + b + c)² − 3(ab + bc + ca) = a² + b² + c² − ab − bc − ca = ½[(a − b)² + (b − c)² + (c − a)²] ≥ 0.\nSince the discriminant is not negative, the equation has at least one real solution.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'Find all real numbers m for which the equation\n\nx² − 2mx + m + 2 = 0\n\nhas two different positive real solutions. Prove your answer.',
      answers: ['m > 2'],
      keySteps: ['Two different real solutions: D/4 = m² − m − 2 = (m − 2)(m + 1) > 0, so m > 2 or m < −1.', 'By Vieta, the sum of the solutions is 2m and the product is m + 2.', 'Both positive ⇔ sum > 0 and product > 0 (given they are real): m > 0 and m > −2.', 'Together: m > 2.'],
      solution: 'Two different real solutions exist exactly when D/4 = m² − (m + 2) = (m − 2)(m + 1) > 0, i.e. m > 2 or m < −1.\n\nLet x₁, x₂ be the solutions. By Vieta, x₁ + x₂ = 2m and x₁x₂ = m + 2. Two real numbers are both positive exactly when their product and their sum are positive. So we need m + 2 > 0 and 2m > 0, i.e. m > 0.\n\nCombining with the first condition: m > 2. For every m > 2 both conditions hold, so the answer is all m > 2.',
    },
  },

  8: {
    lesson: {
      idea: 'n different objects can be arranged in a row in n! = 1·2·…·n ways. If some objects are identical, divide by the number of ways to shuffle the identical ones among themselves. If two objects must stay together, glue them into one block, then multiply by the ways to arrange inside the block.',
      steps: ['All different: n!.', 'Repeated objects: n! divided by (k₁!·k₂!·…) for the groups of identical objects.', '“Must be next to each other”: treat them as one block.', 'Many existence questions (“is this an integer?”) can be answered by finding something it counts.'],
      example: {
        q: 'In how many ways can the letters of BANANA be arranged?',
        a: '6 letters with A three times and N twice: 6!/(3!·2!) = 720/12 = 60.',
      },
      de: [['Fakultät', 'factorial'], ['Permutation', 'permutation (arrangement)'], ['Anordnung', 'arrangement'], ['nebeneinander', 'next to each other']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In how many different orders can the letters of MISSISSIPPI be arranged?',
        answers: ['34650'],
        hint: '11 letters: M once, I four times, S four times, P twice.',
        solution: '11!/(4!·4!·2!) = 39916800/1152 = 34650.',
      },
      {
        type: 'answer',
        q: 'Five people, including Anna and Bernd, sit in a row of five chairs. In how many ways can they sit if Anna and Bernd sit next to each other?',
        answers: ['48'],
        hint: 'Glue Anna and Bernd into one block.',
        solution: 'Treat Anna and Bernd as one block: 4 “objects” → 4! = 24 orders. Inside the block they can sit in 2 orders. Total 24·2 = 48.',
      },
      {
        type: 'proof',
        q: 'Prove that for every positive integer n the number\n\n(2n)! / (2ⁿ · n!)\n\nis an integer.',
        hint: 'Count the ways to split 2n people into n pairs.',
        keySteps: ['Count the ways to split 2n people into n unordered pairs; call it P. P is an integer.', 'Line up the 2n people in (2n)! ways and pair positions 1–2, 3–4, …: every split into pairs arises.', 'Each split arises 2ⁿ·n! times: swap inside each pair (2ⁿ) and reorder the pairs (n!).', 'So (2n)! = P · 2ⁿ · n!, hence (2n)!/(2ⁿ·n!) = P is an integer.'],
        solution: 'Let P be the number of ways to split 2n people into n pairs (the order of the pairs and within a pair doesn’t matter). P is a whole number.\n\nArrange the 2n people in a row, in (2n)! ways, and pair person 1 with 2, 3 with 4, and so on. Every split into pairs is obtained, and each one exactly 2ⁿ·n! times: we can swap the two people in each pair (2 ways for each of the n pairs) and put the n pairs in any order (n! ways).\n\nSo (2n)! = P·2ⁿ·n!, which means (2n)!/(2ⁿ·n!) = P is an integer.',
      },
    ],
    challenge: {
      source: 'Olympiad classic',
      q: 'Prove that for every positive integer n the number (n!)! is divisible by (n!)^((n−1)!).',
      keySteps: ['Let m = n! = n·(n − 1)!. Count the ways to split m people into (n − 1)! groups of n people each (unordered groups).', 'Lining people up in m! ways and cutting into blocks of n gives every split.', 'Each split arises (n!)^((n−1)!) · ((n − 1)!)! times (order inside each group, order of the groups).', 'So m! = (number of splits) · (n!)^((n−1)!) · ((n − 1)!)!, and (n!)^((n−1)!) divides (n!)!.'],
      solution: 'Let m = n!, so m = n·(n − 1)!. Count the ways S to split m people into (n − 1)! groups of n people each, where neither the order of the groups nor the order inside a group matters. S is a whole number.\n\nArrange the m people in a row (m! ways) and cut the row into consecutive blocks of n. Every split appears, and each exactly (n!)^((n−1)!)·((n − 1)!)! times: the n people in each of the (n − 1)! blocks can be ordered in n! ways, and the blocks themselves in ((n − 1)!)! ways.\n\nSo m! = S·(n!)^((n−1)!)·((n − 1)!)!. In particular (n!)^((n−1)!) divides m! = (n!)!.',
    },
  },

  9: {
    lesson: {
      idea: 'Two triangles are similar (same shape, maybe different size) if two angles match (WW), if two sides are in the same ratio with equal included angle (SWS), or if all three sides are in the same ratio (SSS). Then all corresponding sides are in the same ratio k, and areas are in the ratio k². A line parallel to one side of a triangle cuts off a similar triangle.',
      steps: ['Look for two equal angles: parallel lines, vertical angles, right angles, a common angle.', 'Write the similarity with matching vertices in the same order: △ABC ∼ △DEF.', 'Turn it into a ratio equation: AB/DE = BC/EF = CA/FD, often rewritten as a product of lengths.'],
      example: {
        q: 'In a right triangle with the right angle at C, the altitude from C meets the hypotenuse at H. Show that CH² = AH·HB.',
        a: 'Triangles ACH and CBH both have a right angle at H, and ∠ACH = 90° − ∠A = ∠B = ∠CBH. So they are similar: AH/CH = CH/HB, i.e. CH² = AH·HB.',
      },
      de: [['ähnlich', 'similar'], ['Verhältnis', 'ratio'], ['parallel', 'parallel'], ['Flächeninhalt', 'area']],
    },
    problems: [
      {
        type: 'answer',
        q: 'In triangle ABC the point D lies on AB and E on AC with DE ∥ BC. Also AD = 4, DB = 6 and BC = 15.\n\nFind DE.',
        answers: ['6'],
        hint: 'Triangle ADE is similar to triangle ABC. What is the ratio?',
        solution: 'Because DE ∥ BC, triangles ADE and ABC are similar with ratio AD/AB = 4/10. So DE = 15·4/10 = 6.',
      },
      {
        type: 'answer',
        q: 'ABCD is a trapezoid with AB ∥ CD, AB = 12 and CD = 4. The diagonals meet at P, and the area of triangle CDP is 3.\n\nFind the area of triangle ABP.',
        answers: ['27'],
        hint: 'Triangles ABP and CDP are similar. Areas scale with the square of the ratio.',
        solution: 'AB ∥ CD gives equal alternate angles, so triangles ABP and CDP are similar with ratio AB/CD = 3. Areas scale with 3² = 9: the area of ABP is 9·3 = 27.',
      },
      {
        type: 'proof',
        q: 'In an acute triangle ABC, let D be the foot of the altitude from A and E the foot of the altitude from B.\n\nProve that CD · CB = CE · CA.',
        hint: 'Find two similar right triangles that share the angle at C.',
        keySteps: ['Triangles CDA and CEB: right angles at D and E.', 'They share the angle at C.', 'So they are similar (WW): CD/CA = CE/CB.', 'Cross-multiplying gives CD·CB = CE·CA.'],
        solution: 'Consider triangles CDA and CEB. Both have a right angle (at D and at E), and both have the angle γ at C. So they are similar (WW), with D ↔ E and A ↔ B. Hence CD/CA = CE/CB, and multiplying out gives CD·CB = CE·CA.',
      },
    ],
    challenge: {
      source: 'Regional level',
      q: 'ABCD is a trapezoid with AB ∥ CD, and its diagonals meet at P. The line through P parallel to AB meets AD at X and BC at Y.\n\nProve that P is the midpoint of XY.',
      keySteps: ['Triangles ABP and CDP are similar, so AP/PC = BP/PD = AB/CD.', 'Hence AP/AC = BP/BD (both equal AB/(AB + CD)).', 'XP ∥ DC: triangle AXP ∼ triangle ADC, so XP = DC·AP/AC.', 'PY ∥ DC: triangle BPY ∼ triangle BDC, so PY = DC·BP/BD. Therefore XP = PY.'],
      solution: 'Since AB ∥ CD, triangles ABP and CDP are similar (alternate angles), so AP/PC = BP/PD = AB/CD. Consequently AP/AC = AB/(AB + CD) = BP/BD.\n\nIn triangle ADC the line XP is parallel to DC, so triangle AXP is similar to triangle ADC and XP = DC·AP/AC.\n\nIn triangle BDC the line PY is parallel to DC, so triangle BPY is similar to triangle BDC and PY = DC·BP/BD.\n\nSince AP/AC = BP/BD, we get XP = PY: P is the midpoint of XY. (In fact XP = PY = AB·CD/(AB + CD).)',
    },
  },
}
