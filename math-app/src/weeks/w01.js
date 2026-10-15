// Week 1 · Parity and invariants · Regional level
// Answer problems were all checked by computer.
export default {
  week: 1,
  days: [
    {
      title: 'Parity',
      lesson: {
        idea: 'Many moves change a number by an even amount, so whether it is even or odd (its parity) never changes. If the start and the goal have different parity, the goal is impossible. If they match, try to build it.',
        steps: ['Find a quantity (a sum, a count, a position) that every move changes by an even amount.', 'Compare its parity at the start and at the goal.', 'Different parity → impossible. Same parity → try to construct it.'],
        example: {
          q: 'A knight starts on a corner of a chessboard, makes some moves and ends up back on the same square. Show that it made an even number of moves.',
          a: 'Every knight move goes from a white square to a black one or the other way round. To end on the starting colour, the colour must have changed an even number of times, so the number of moves is even.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'A frog sits at 0 on the number line. Its k-th jump has length k (1, then 2, then 3, …), and each jump goes left or right.\n\nWhat is the smallest n ≥ 10 such that the frog can be back at 0 right after its n-th jump?',
          answers: ['11'],
          hint: 'Changing the direction of one jump changes the final position by an even number. Compare with 1 + 2 + … + n.',
          solution: 'Turning jump k around changes the end point by 2k, so the end point always has the same parity as 1 + 2 + … + n = n(n + 1)/2.\n\nn = 10: 55 is odd, so 0 is impossible. n = 11: 66 is even and 1 + 2 + 3 + 4 + 5 + 7 + 11 = 33 = 6 + 8 + 9 + 10. Jump right on the first group and left on the second.',
        },
        {
          type: 'answer',
          q: 'Seven coins lie heads up. In one move you must turn over exactly 3 of them.\n\nWhat is the smallest number of moves needed to make all seven coins show tails?',
          answers: ['3'],
          hint: 'Every coin must be turned an odd number of times. What does that say about the total number of turns?',
          solution: 'Each coin is turned an odd number of times, so the total number of turns is odd and at least 7. After m moves there are 3m turns, so 3m must be odd and ≥ 7, which gives m ≥ 3.\n\n3 moves work: turn {1,2,3}, {1,4,5}, {1,6,7}.',
        },
        {
          type: 'proof',
          q: 'The numbers 1, 2, …, 10 are written on a board. In each step you erase two numbers a and b and write |a − b|. After 9 steps one number is left.\n\nProve that this number is odd.',
          hint: 'Compare the parity of a + b and |a − b|.',
          keySteps: ['a + b and |a − b| always have the same parity (they differ by 2·min(a, b)).', 'So the parity of the sum of all numbers on the board never changes.', 'The sum starts at 55, which is odd, so the last number is odd.'],
          solution: 'a + b − |a − b| = 2·min(a, b) is even, so a + b and |a − b| have the same parity. Replacing a and b by |a − b| therefore does not change the parity of the total sum. At the start the total is 1 + 2 + … + 10 = 55, which is odd. At the end the total is the last number, so it is odd.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'There are 13 weights, each with a whole number of grams. If you remove any one of them, the other 12 can be split into two groups of 6 with the same total mass.\n\nProve that all 13 weights have the same mass.',
        keySteps: [
          'All masses have the same parity: removing weight w leaves an even total, so every w has the parity of the total mass.',
          'Subtracting the same number from every weight keeps the property (both groups have 6 weights).',
          'Subtract the smallest mass: now one weight is 0, so all are even. Halving every weight also keeps the property.',
          'If not all weights were 0, you could halve forever and get smaller and smaller positive whole numbers, which is impossible (infinite descent). So all were equal.',
        ],
        solution: 'Let S be the total mass. Removing weight w leaves S − w, which splits into two equal halves, so S − w is even: every weight has the same parity as S.\n\nIf we subtract the same number c from every weight, each group of 6 loses 6c, so the property still holds. Subtract the smallest mass: now all masses are ≥ 0 and one is 0. Since they all have the same parity as that 0, they are all even. Halving all of them keeps the property too.\n\nIf some mass were positive, we could repeat this forever: all even, halve, all even, halve, … But a positive whole number can only be halved finitely often. So after subtracting the smallest mass all weights are 0, which means all 13 weights were equal.',
      },
    },
    {
      title: 'Invariants',
      lesson: {
        idea: 'An invariant is something that never changes, whatever move you make: a sum, a product, a remainder, a sum of squares. Work out its value at the start and at the goal. If they differ, the goal can never be reached. If the question asks for “the final result”, the invariant often gives it directly.',
        steps: ['Try simple quantities: the sum, the product, the sum of squares, a count mod 2 or 3.', 'Check what one move does to it.', 'Compare the start with the goal.'],
        example: {
          q: 'A circle is split into 6 sectors containing 1, 0, 1, 0, 0, 0 (going round). A move adds 1 to two neighbouring sectors. Can all six numbers become equal?',
          a: 'Look at a₁ − a₂ + a₃ − a₄ + a₅ − a₆. Neighbouring sectors have opposite signs, so a move never changes it. It starts at 2, but if all numbers are equal it is 0. So it is impossible.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'The numbers 1, 2, 3, 4, 5, 6 are written on a board. In each step you erase two numbers a and b and write a + b + ab. After 5 steps one number is left.\n\nWhat is it?',
          answers: ['5039'],
          hint: 'Add 1 to a + b + ab. Can you factor it?',
          solution: 'a + b + ab + 1 = (a + 1)(b + 1). So the product of (x + 1) over all numbers on the board never changes. At the start it is 2·3·4·5·6·7 = 5040. If N is the last number, N + 1 = 5040, so N = 5039, whatever order you choose.',
        },
        {
          type: 'answer',
          q: 'The numbers 3, 4 and 12 are on a board. In a move you pick two of them, x and y, and replace them with 0.6x − 0.8y and 0.8x + 0.6y.\n\nAfter 100 moves, what is the sum of the squares of the three numbers?',
          answers: ['169'],
          hint: 'Expand (0.6x − 0.8y)² + (0.8x + 0.6y)².',
          solution: '(0.6x − 0.8y)² + (0.8x + 0.6y)² = x² + y², because the xy terms cancel. So the sum of squares never changes: 9 + 16 + 144 = 169.',
        },
        {
          type: 'proof',
          q: 'On an island there are 13 red, 15 green and 17 blue chameleons. When two chameleons of different colours meet, both change to the third colour.\n\nProve that the chameleons can never all have the same colour.',
          hint: 'Look at the differences between the numbers of chameleons of two colours, modulo 3.',
          keySteps: ['Every meeting changes the three counts by (−1, −1, +2) in some order.', 'So every difference of two counts changes by 0 or ±3: the differences mod 3 never change.', 'At the start R − G ≡ 1, G − B ≡ 1, R − B ≡ 2 (mod 3), none of them 0.', 'If all chameleons had one colour, the other two counts would both be 0 and their difference ≡ 0 (mod 3). Contradiction.'],
          solution: 'Let R, G, B be the numbers of red, green and blue chameleons. A meeting changes (R, G, B) by (−1, −1, +2) in some order. So any difference of two counts changes by 0 (if both drop by 1) or by ±3. Hence R − G, G − B and R − B never change modulo 3.\n\nAt the start R − G = −2 ≡ 1, G − B = −2 ≡ 1 and R − B = −4 ≡ 2 (mod 3). If all chameleons became, say, blue, then R = G = 0 and R − G ≡ 0, which is impossible. The same argument works for red (G − B ≡ 0 needed) and green (R − B ≡ 0 needed).',
        },
      ],
      challenge: {
        source: 'IMO 1986, Problem 3 (above ÖMO level)',
        q: 'An integer is written at each vertex of a regular pentagon, and the sum of all five is positive. If three neighbouring vertices have numbers x, y, z with y < 0, you may replace them by x + y, −y, z + y. This is repeated as long as some number is negative.\n\nProve that the process always stops after finitely many steps.',
        keySteps: [
          'The sum S of the five numbers never changes, so S > 0 always.',
          'Find a quantity that is a non-negative whole number, e.g. f = Σ (vᵢ − vᵢ₊₂)² over the five vertices (indices going round).',
          'Compute that one move changes f by exactly 2·S·y, which is negative because y < 0 and S > 0.',
          'A non-negative whole number cannot decrease forever, so the process stops.',
        ],
        solution: 'The move replaces (x, y, z) by (x + y, −y, z + y): the total changes by y − 2y + y = 0, so the sum S stays positive.\n\nLet the numbers be v₁, …, v₅ (indices mod 5) and f = Σ (vᵢ − vᵢ₊₂)². This is a non-negative integer. Expanding the change when the move is made at y = v₃ (x = v₂, z = v₄): only the terms involving v₂, v₃, v₄ change, and a direct calculation gives f(new) − f(old) = 2y(v₁ + v₂ + v₃ + v₄ + v₅) = 2yS.\n\nSince y < 0 and S > 0, f strictly decreases with every move. A non-negative integer can only strictly decrease finitely many times, so the process must stop.',
      },
    },
    {
      title: 'Monovariants',
      lesson: {
        idea: 'A monovariant is a quantity that only ever moves in one direction: every move makes it strictly smaller (or larger). If it is a whole number with a lower bound, it can only decrease finitely often, so the process must stop. Counting how much it changes per move also bounds the number of moves.',
        steps: ['Look for something that “gets better” with each move: a sum of squares, a number of bad pairs, a distance.', 'Show it changes strictly, by at least some fixed amount.', 'Use the bound: it can’t go below 0 (or above the maximum).'],
        example: {
          q: 'Some coins lie in a row, each heads or tails. A move: pick an H directly followed by a T and replace “HT” by “TH”. Show that you can only make finitely many moves.',
          a: 'Count the pairs (H, T) where the H is somewhere left of the T. Each move removes one such pair and creates no new one, so this whole number strictly decreases. It can’t go below 0, so the process stops.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'On an island there are 13 red, 15 green and 16 blue chameleons. When two chameleons of different colours meet, both change to the third colour.\n\nWhat is the smallest number of meetings after which all chameleons are green?',
          answers: ['16'],
          hint: 'Watch red + blue. How does each kind of meeting change it?',
          solution: 'A red–blue meeting lowers red + blue by 2. Any other meeting raises red + blue by 1. Red + blue starts at 29 and must reach 0.\n\nWith a red–blue meetings and b others: 2a − b = 29, so b = 2a − 29 ≥ 0, giving a ≥ 15 and a + b = 3a − 29 ≥ 16.\n\n16 is possible: one green–blue meeting gives 15 red, 14 green, 15 blue, then 15 red–blue meetings turn everyone green.',
        },
        {
          type: 'answer',
          q: 'The numbers 1, 2, …, 10 are on a board. A move: choose two numbers a < b with b − a ≥ 2 and replace them by a + 1 and b − 1.\n\nWhat is the largest number of moves you can make?',
          answers: ['40'],
          hint: 'What does a move do to the sum of the squares of all numbers? What does the board look like when no move is possible?',
          solution: 'The sum stays 55. A move changes the sum of squares by (a + 1)² + (b − 1)² − a² − b² = −2(b − a − 1) ≤ −2.\n\nWhen no move is possible, all numbers differ by at most 1, so they are five 5s and five 6s with sum of squares 305. At the start it is 385. So there are at most (385 − 305)/2 = 40 moves. 40 is reached by a suitable order of moves that always uses two numbers with b − a = 2 (each such move lowers the sum of squares by exactly 2).',
        },
        {
          type: 'proof',
          q: 'The numbers 1, 2, …, 10 are on a board. A move: choose two numbers a < b with b − a ≥ 2 and replace them by a + 1 and b − 1.\n\nProve that, however you play, you can only make finitely many moves.',
          hint: 'Find a whole number that strictly decreases with every move.',
          keySteps: ['Consider the sum of the squares of all numbers.', 'A move changes it by −2(b − a − 1), which is at most −2 because b − a ≥ 2.', 'It is a positive whole number, so it can only decrease finitely many times.'],
          solution: 'Let Q be the sum of the squares of the numbers on the board. A move replaces a² + b² by (a + 1)² + (b − 1)² = a² + b² + 2a − 2b + 2, so Q changes by −2(b − a − 1) ≤ −2. Q is always a positive integer, so it can decrease only finitely many times. Hence the process stops.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'In a club every member has at most 3 enemies in the club (being enemies is mutual).\n\nProve that the members can be split into two groups so that everyone has at most one enemy in their own group.',
        keySteps: [
          'Start with any split, and let E be the number of enemy pairs inside the same group.',
          'If someone has at least 2 enemies in their own group, they have at most 1 in the other group.',
          'Moving that person to the other group lowers E by at least 1.',
          'E is a non-negative whole number, so this stops — and then everyone has at most one enemy in their own group.',
        ],
        solution: 'Split the members into two groups in any way, and let E be the number of pairs of enemies who are in the same group.\n\nIf some member X has at least 2 enemies in their own group, then X has at most 3 − 2 = 1 enemy in the other group. Move X to the other group: the enemy pairs inside groups involving X go from at least 2 to at most 1, and no other pair changes. So E decreases by at least 1.\n\nRepeat this while possible. E is a non-negative integer, so it can only decrease finitely many times. When we have to stop, no member has 2 or more enemies in their own group, which is what we wanted.',
      },
    },
    {
      title: 'Colouring',
      lesson: {
        idea: 'Colour the board (like a chessboard, in stripes, or along diagonals with k colours) so that every piece or move treats the colours in a fixed way. Then count each colour: if the numbers don’t fit, the tiling or movement is impossible. Colourings also help build constructions.',
        steps: ['Try the chessboard colouring first.', 'For 1×k pieces, colour with k colours so every piece covers each colour once: colour (row + column) mod k.', 'Count the cells of each colour and compare.'],
        example: {
          q: 'Remove two opposite corners from a chessboard. Can the remaining 62 squares be covered by 31 dominoes?',
          a: 'Both removed corners have the same colour, so 32 squares of one colour and 30 of the other remain. Every domino covers one of each colour, so 31 dominoes would need 31 of each. Impossible.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'There is a beetle on every cell of a 5×5 board. At a whistle every beetle crawls to a cell sharing a side with its own. Several beetles may end up in the same cell.\n\nWhat is the smallest possible number of empty cells afterwards?',
          answers: ['1'],
          hint: 'Colour the board like a chessboard. Which colour has more cells, and where can beetles on it come from?',
          solution: 'With a chessboard colouring there are 13 black cells (including the corners) and 12 white. Every beetle changes colour, so the black cells afterwards only receive the 12 beetles from white cells: at least one black cell is empty.\n\n1 is possible: cover the board except one corner with 12 dominoes. The two beetles in each domino swap places, and the corner beetle moves to a neighbour.',
        },
        {
          type: 'answer',
          q: 'What is the smallest number of cells you must mark on an 8×8 board so that every 1×4 rectangle (horizontal or vertical) contains at least one marked cell?',
          answers: ['16'],
          hint: 'First find 16 rectangles that don’t overlap. Then try marking cells along diagonals.',
          solution: 'The board can be cut into 16 non-overlapping 1×4 rectangles, and each needs its own mark, so at least 16.\n\n16 is enough: mark the cells with (row + column) ≡ 3 (mod 4). There are 16 of them, and any 4 consecutive cells in a row or column contain all four remainders, so one is marked.',
        },
        {
          type: 'proof',
          q: 'Prove that a 10×10 board cannot be covered by 1×4 strips (each strip covers exactly 4 cells in a row or in a column, without overlaps).',
          hint: 'Colour cell (r, c) with (r + c) mod 4 and count each colour.',
          keySteps: ['Colour cell (r, c) with (r + c) mod 4.', 'Every 1×4 strip, horizontal or vertical, covers each of the 4 colours exactly once.', '25 strips would cover exactly 25 cells of each colour.', 'Counting gives 25, 24, 25, 26 cells of colours 0, 1, 2, 3, which is not 25 each.'],
          solution: 'Colour cell (r, c) (1 ≤ r, c ≤ 10) with (r + c) mod 4. Four consecutive cells in a row or column have four consecutive values of r + c, so a strip covers each colour exactly once. A covering would use 25 strips and so cover exactly 25 cells of each colour.\n\nBut there are 25 cells of colour 0, 24 of colour 1, 25 of colour 2 and 26 of colour 3. So no covering exists.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'A 7×7 board is covered by sixteen 1×3 strips and one 1×1 square.\n\nProve that the 1×1 square lies in one of the 9 cells whose row and column are both 1, 4 or 7 (rows and columns numbered 1 to 7).',
        keySteps: [
          'Colour cell (r, c) with (r + c) mod 3. Every 1×3 strip covers each colour once.',
          'Count: colour 2 appears 17 times, the others 16 times, so the single square must have r + c ≡ 2 (mod 3).',
          'Do the same with (r − c) mod 3: colour 0 appears 17 times, so r − c ≡ 0 (mod 3).',
          'Together: 2r ≡ 2, so r ≡ c ≡ 1 (mod 3), i.e. r, c ∈ {1, 4, 7}.',
        ],
        solution: 'Colour cell (r, c) with (r + c) mod 3. Three consecutive cells in a row or column have three consecutive values of r + c, so each strip covers one cell of each colour, and the 16 strips cover 16 cells of each colour. Counting the board: colour 0 has 16 cells, colour 1 has 16 and colour 2 has 17. So the single square has colour 2: r + c ≡ 2 (mod 3).\n\nNow colour with (r − c) mod 3. Again every strip covers each colour once. Here colour 0 has 17 cells and the others 16, so r − c ≡ 0 (mod 3).\n\nAdding: 2r ≡ 2, so r ≡ 1 (mod 3), and then c ≡ r ≡ 1. Hence r, c ∈ {1, 4, 7}.',
      },
    },
    {
      title: 'Games',
      lesson: {
        idea: 'In a game where the player who can’t move loses, find the losing positions: positions where every move leads to a winning position for the opponent. Work backwards from the end. Two great tricks: symmetry (copy your opponent’s move in a mirror) and strategy stealing (if the second player had a winning strategy, the first could use it).',
        steps: ['Play small cases and mark positions as winning (W) or losing (L).', 'L: every move goes to W. W: some move goes to L.', 'Look for a pattern, then prove it.', 'For two-player board games try a symmetric strategy.'],
        example: {
          q: 'Two players take turns removing 1, 2 or 3 stones from a pile of 2024. Whoever takes the last stone wins. Who wins?',
          a: 'Multiples of 4 are losing: from 4k you can only reach 4k − 1, 4k − 2, 4k − 3, and from those the opponent goes back to a multiple of 4. 2024 = 4·506, so the second player wins by always making the total of each round 4.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'Two players take turns removing 1, 3 or 4 stones from a pile. Whoever takes the last stone wins.\n\nFor how many starting sizes n with 1 ≤ n ≤ 100 does the second player win?',
          answers: ['29'],
          hint: 'Work out W/L for n = 0, 1, 2, … up to 14 and look for a pattern.',
          solution: 'Working backwards, the losing positions are n ≡ 0 or 2 (mod 7): 0, 2, 7, 9, 14, 16, … From these, removing 1, 3 or 4 always lands on a winning position, and from every other n there is a move to one of them.\n\nBetween 1 and 100 there are 14 multiples of 7 and 15 numbers ≡ 2 (mod 7) (2, 9, …, 100): 29 in total.',
        },
        {
          type: 'answer',
          q: 'Nim: there are three piles with 3, 5 and 7 stones. A move removes any positive number of stones from one pile. Whoever takes the last stone wins.\n\nThe first player can win. How many different first moves win?',
          answers: ['3'],
          hint: 'Write the pile sizes in binary and XOR them. Winning moves make the XOR 0.',
          solution: '3 ⊕ 5 ⊕ 7 = 011 ⊕ 101 ⊕ 111 = 001. A winning move makes the XOR 0: change a pile p to p ⊕ 1 if that is smaller. 3 → 2, 5 → 4 and 7 → 6 all work, so there are 3 winning first moves.',
        },
        {
          type: 'proof',
          q: 'Two players take turns placing dominoes on an 8×8 board. Each domino covers two cells sharing a side, and dominoes may not overlap. The player who cannot move loses.\n\nProve that the second player can always win.',
          hint: 'Mirror your opponent through the centre of the board.',
          keySteps: ['Strategy: answer every domino with its mirror image through the centre of the board.', 'After each of the second player’s moves, the position is symmetric about the centre.', 'The mirror image is always free: it was free before the opponent’s move by symmetry, and the new domino can’t overlap its own mirror image (no cell is its own mirror image, and no domino contains a cell and its mirror image).', 'So the second player can always move, and the first player is the one who gets stuck.'],
          solution: 'The second player answers each move by placing the domino symmetric to it with respect to the centre of the board.\n\nAfter every move of the second player the covered cells are symmetric. When the first player places a domino D, its mirror D′ was free before (by symmetry, since D was free). Could D′ overlap D? A cell and its mirror image are never the same cell (the centre is a corner point, not a cell), and they are never neighbours: neighbouring cells have centres at distance 1 whose midpoint is the middle of an edge, not the centre of the board. So D and D′ are disjoint and D′ is a legal move.\n\nThus the second player always has a move, the game is finite, so the first player is the one who eventually cannot move.',
        },
      ],
      challenge: {
        source: 'Olympiad classic (strategy stealing)',
        q: 'The numbers 1, 2, …, n (n ≥ 2) are written on a board. Two players take turns. A move: choose one of the remaining numbers and erase it together with all its divisors that are still on the board. The player who erases the last number wins.\n\nProve that the first player has a winning strategy (even though we don’t know what it is!).',
        keySteps: [
          'The game always ends, so one of the players has a winning strategy.',
          'Suppose the second player has one. Consider the first move “erase 1”.',
          'The second player then has a winning reply: erase some x (together with its divisors).',
          'But erasing x at the very start leads to exactly the same position (1 divides x), so the first player could have played x first and then followed the second player’s strategy. Contradiction, so the first player wins.',
        ],
        solution: 'The game is finite and has no draws, so exactly one player has a winning strategy.\n\nSuppose it is the second player. Then whatever the first player does, the second player can win. In particular, if the first player starts by erasing just the number 1, the second player has a winning answer: erase some number x and its divisors, reaching a position P from which the second player (now “the player who just moved”) wins.\n\nBut the first player could have erased x right at the start: since 1 divides x, this erases exactly the same numbers and reaches the same position P. Then the first player is in the winning role. This contradicts the assumption, so the first player has a winning strategy.',
      },
    },
    {
      title: 'Mixed review',
      problems: [
        {
          type: 'answer',
          q: 'Eleven coins lie heads up. In one move you must turn over exactly 3 of them.\n\nWhat is the smallest number of moves needed to make all eleven show tails?',
          answers: ['5'],
          hint: 'How many turns does each coin need — odd or even? And how many turns are made in m moves?',
          solution: 'Each coin is turned an odd number of times, so the total number of turns is a sum of eleven odd numbers: odd and ≥ 11. In m moves there are 3m turns, so 3m is odd and ≥ 11: m ≥ 5 (m = 4 gives 12, which is even).\n\n5 moves (15 turns) work: {1,2,3}, {4,5,6}, {7,8,9}, {1,2,10}, {1,2,11}. Coins 1 and 2 are turned 3 times, all others once.',
        },
        {
          type: 'answer',
          q: 'What is the last digit of 3²⁰²⁴ + 7²⁰²⁴?',
          answers: ['2'],
          hint: 'Last digits of powers repeat with period 4.',
          solution: 'Last digits of powers of 3: 3, 9, 7, 1, … and of 7: 7, 9, 3, 1, … Since 2024 is divisible by 4, both end in 1. The sum ends in 2.',
        },
        {
          type: 'proof',
          q: 'The numbers 1, 2, …, 2n are written on a board. In each step you erase two numbers a and b and write |a − b|, until one number is left.\n\nProve that the last number is even if n is even, and odd if n is odd.',
          hint: 'Which quantity keeps its parity in every step?',
          keySteps: ['a + b and |a − b| have the same parity, so the parity of the total sum never changes.', 'The total at the start is 1 + 2 + … + 2n = n(2n + 1).', 'n(2n + 1) has the same parity as n, because 2n + 1 is odd.', 'The last number equals the final total, so it has the parity of n.'],
          solution: 'a + b − |a − b| = 2·min(a, b) is even, so each step keeps the parity of the total sum. The total starts at 1 + 2 + … + 2n = n(2n + 1). Since 2n + 1 is odd, this has the same parity as n. At the end the total is just the last number, so the last number is even exactly when n is even.',
        },
      ],
    },
    {
      title: 'Mock exam',
      problems: [
        {
          type: 'proof',
          area: 'A',
          q: 'Find all real numbers x with\n\n√(x + 3 − 4√(x − 1)) + √(x + 8 − 6√(x − 1)) = 1.',
          answers: ['5 ≤ x ≤ 10'],
          keySteps: ['Substitute t = √(x − 1) ≥ 0, so x = t² + 1.', 'Then x + 3 − 4t = (t − 2)² and x + 8 − 6t = (t − 3)², so the equation is |t − 2| + |t − 3| = 1.', '|t − 2| + |t − 3| ≥ |(t − 2) − (t − 3)| = 1, with equality exactly when 2 ≤ t ≤ 3.', 'So 4 ≤ x − 1 ≤ 9: all x with 5 ≤ x ≤ 10.'],
          solution: 'The equation needs x ≥ 1. Put t = √(x − 1) ≥ 0, so x = t² + 1. Then\nx + 3 − 4t = t² − 4t + 4 = (t − 2)² and x + 8 − 6t = t² − 6t + 9 = (t − 3)².\nSince √(u²) = |u|, the equation becomes |t − 2| + |t − 3| = 1.\n\nBy the triangle inequality |t − 2| + |3 − t| ≥ |(t − 2) + (3 − t)| = 1, with equality exactly when t − 2 and 3 − t have the same sign, i.e. 2 ≤ t ≤ 3. So 2 ≤ √(x − 1) ≤ 3, which means 5 ≤ x ≤ 10. All these x are solutions.',
        },
        {
          type: 'proof',
          area: 'N',
          q: 'Find all prime numbers p for which 2p² + 1 is also prime.',
          answers: ['3'],
          keySteps: ['p = 3 works: 2·9 + 1 = 19 is prime. (p = 2 gives 9, not prime.)', 'If p ≠ 3, then p² ≡ 1 (mod 3).', 'So 2p² + 1 ≡ 2 + 1 ≡ 0 (mod 3), and 2p² + 1 > 3, so it is not prime.', 'Answer: only p = 3.'],
          solution: 'For p = 3 we get 19, which is prime. For p = 2 we get 9, which is not.\n\nIf p is a prime other than 3, then 3 does not divide p, so p ≡ ±1 (mod 3) and p² ≡ 1 (mod 3). Hence 2p² + 1 ≡ 3 ≡ 0 (mod 3). Since 2p² + 1 > 3, it is divisible by 3 and not prime.\n\nSo the only prime is p = 3.',
        },
        {
          type: 'proof',
          area: 'C',
          q: 'On an 8×8 board exactly one cell, a corner, is black and all others are white. A move: choose a row or a column and switch the colour of all 8 cells in it (black ↔ white).\n\nProve that the board can never become completely white.',
          keySteps: ['Look at the 2×2 square in the corner that contains the black cell.', 'A move switches either 0 or exactly 2 cells of any 2×2 square (a row or column meets it in 0 or 2 cells).', 'So the parity of the number of black cells in that 2×2 square never changes.', 'It starts odd (1), but an all-white board would give 0. Contradiction.'],
          solution: 'Consider the 2×2 square in the corner containing the black cell. Any row or column meets this square in either 0 or 2 cells, so a move switches the colour of 0 or 2 of its cells. This changes the number of black cells in the square by 0, +2, −2 or 0, so its parity never changes.\n\nAt the start the square has 1 black cell (odd). On a completely white board it would have 0 (even). So the board can never become completely white.',
        },
        {
          type: 'proof',
          area: 'G',
          q: 'Let ABC be an acute triangle with orthocentre H (the point where the three altitudes meet).\n\nProve that the reflection of H in the line BC lies on the circumcircle of triangle ABC.',
          keySteps: ['Show ∠BHC = 180° − ∠BAC, e.g. using the quadrilateral formed by A, H and the feet of the altitudes from B and C (it has two right angles).', 'Let H′ be the reflection of H in BC. Reflection preserves angles, so ∠BH′C = ∠BHC = 180° − ∠BAC.', 'A and H′ are on opposite sides of BC.', 'So ∠BAC + ∠BH′C = 180° and ABH′C is a cyclic quadrilateral: H′ lies on the circumcircle.'],
          solution: 'Let E and F be the feet of the altitudes from B and C. In quadrilateral AFHE the angles at E and F are 90°, so ∠FHE = 180° − ∠A. Since ∠BHC and ∠FHE are vertical angles, ∠BHC = 180° − ∠A.\n\nLet H′ be the reflection of H in BC. Triangles BHC and BH′C are congruent, so ∠BH′C = ∠BHC = 180° − ∠A. In an acute triangle H lies inside the triangle, so H′ lies on the other side of BC from A. Thus in quadrilateral ABH′C the opposite angles at A and H′ add up to 180°, so it is cyclic and H′ lies on the circumcircle of ABC.',
        },
      ],
    },
  ],
}
