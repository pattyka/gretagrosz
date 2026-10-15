// Week 2 · Divisibility and remainders · Regional level
// Answer problems were all checked by computer.
export default {
  week: 2,
  days: [
    {
      title: 'Factoring and divisibility',
      lesson: {
        idea: 'If an equation looks like xy + ax + by = c, add ab to both sides to factor it: (x + b)(y + a) = c + ab. Now both brackets divide a fixed number, so there are only finitely many cases. To prove that an expression is always divisible by something, factor it and look at consecutive numbers.',
        steps: ['Bring the equation to the form xy + ax + by = c and factor.', 'List the divisor pairs, including negative ones.', 'For “always divisible by m”: factor, and use that among k consecutive integers one is divisible by k.'],
        example: {
          q: 'Show that n³ − n is divisible by 6 for every integer n.',
          a: 'n³ − n = (n − 1)n(n + 1) is a product of three consecutive integers. One of them is even and one is divisible by 3, so the product is divisible by 6.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'How many pairs of positive integers (x, y) satisfy xy = 2x + 3y?',
          answers: ['4'],
          hint: 'Rewrite it as (x − 3)(y − 2) = ?',
          solution: 'xy − 2x − 3y + 6 = 6, so (x − 3)(y − 2) = 6. Since x − 3 ≥ −2 and y − 2 ≥ −1, no negative factor pair of 6 works. The positive pairs (1, 6), (2, 3), (3, 2), (6, 1) give 4 solutions.',
        },
        {
          type: 'answer',
          q: 'How many ordered pairs of positive integers (x, y) satisfy 1/x + 1/y = 1/12?',
          answers: ['15'],
          hint: 'Multiply by 12xy and factor.',
          solution: '12y + 12x = xy, so (x − 12)(y − 12) = 144. Since 1/x < 1/12, x > 12 and likewise y > 12, so both factors are positive. The number of pairs is the number of divisors of 144 = 2⁴·3², which is 5·3 = 15.',
        },
        {
          type: 'proof',
          q: 'Prove that n⁵ − n is divisible by 30 for every integer n.',
          hint: 'Factor n⁵ − n and check divisibility by 2, 3 and 5 separately.',
          keySteps: ['n⁵ − n = (n − 1)n(n + 1)(n² + 1).', '(n − 1)n(n + 1) is divisible by 2 and 3 (consecutive integers).', 'For 5: if n ≡ 0, ±1 (mod 5) one of n − 1, n, n + 1 is divisible by 5; if n ≡ ±2, then n² + 1 ≡ 5 ≡ 0.', 'Since 2, 3, 5 are coprime, 30 divides n⁵ − n.'],
          solution: 'n⁵ − n = n(n⁴ − 1) = (n − 1)n(n + 1)(n² + 1).\n\nThe product (n − 1)n(n + 1) of three consecutive integers is divisible by 2 and by 3.\n\nDivisibility by 5: if n ≡ 0, 1 or 4 (mod 5), then n, n − 1 or n + 1 is divisible by 5. If n ≡ 2 or 3 (mod 5), then n² ≡ 4 (mod 5), so n² + 1 ≡ 0 (mod 5).\n\nSo n⁵ − n is divisible by 2, 3 and 5, which are pairwise coprime, hence by 30.',
        },
      ],
      challenge: {
        source: 'IMO 1988, Problem 6 (above ÖMO level)',
        q: 'Let a and b be positive integers such that ab + 1 divides a² + b².\n\nProve that (a² + b²)/(ab + 1) is a perfect square.',
        keySteps: [
          'Suppose k = (a² + b²)/(ab + 1) is not a square. Among all pairs of non-negative integers with this k, take one with a ≥ b and a + b as small as possible.',
          'a is a root of x² − kbx + (b² − k) = 0. The other root is a′ = kb − a = (b² − k)/a, which is an integer.',
          'a′ ≥ 0: if a′ < 0, then a′b + 1 ≤ 0, but a′² + b² = k(a′b + 1) > 0. And a′ ≠ 0, since then k = b² would be a square.',
          'a′ = (b² − k)/a < b²/a ≤ a, so (a′, b) is a smaller pair with the same k, a contradiction (“Vieta jumping”).',
        ],
        solution: 'Fix k = (a² + b²)/(ab + 1) and suppose k is not a perfect square. Choose non-negative integers (a, b) with a² + b² = k(ab + 1), a ≥ b and a + b minimal. If b = 0 then k = a², a square, so b ≥ 1.\n\nThen a is a root of x² − kb·x + (b² − k) = 0. By Vieta the other root is a′ = kb − a = (b² − k)/a, an integer.\n\nIf a′ < 0, then a′b + 1 ≤ 0, so a′² + b² = k(a′b + 1) ≤ 0, impossible. If a′ = 0, then k = b², a square. So a′ ≥ 1.\n\nBut a′ = (b² − k)/a < b²/a ≤ a, so (a′, b) is a solution with smaller sum, contradicting minimality. Hence k is a perfect square.',
      },
    },
    {
      title: 'Working modulo n',
      lesson: {
        idea: 'a ≡ b (mod n) means a and b have the same remainder when divided by n. You can add, subtract and multiply congruences and take powers. Squares, cubes and powers only take a few values mod small numbers, which makes them great for proving that something is impossible.',
        steps: ['Pick a good modulus: 3, 4, 8 and 9 are great for squares, 7 and 9 for cubes.', 'List what the expression can be mod n.', 'For big powers, find the smallest power ≡ 1.'],
        example: {
          q: 'Show that no number of the form 4k + 3 is a sum of two squares.',
          a: 'Squares are ≡ 0 or 1 (mod 4), so a sum of two squares is ≡ 0, 1 or 2 (mod 4), never 3.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'What are the last two digits of 7²⁰²⁴?\n\nType them as a two-digit number, for example 07.',
          answers: ['01', '1'],
          hint: 'Compute 7⁴ mod 100.',
          solution: '7⁴ = 2401 ≡ 1 (mod 100). Since 2024 = 4·506, 7²⁰²⁴ = (7⁴)⁵⁰⁶ ≡ 1 (mod 100). The last two digits are 01.',
        },
        {
          type: 'answer',
          q: 'How many integers n with 1 ≤ n ≤ 1000 make n² + n + 1 divisible by 7?',
          answers: ['286'],
          hint: 'Only the remainder of n mod 7 matters. Try all 7 remainders.',
          solution: 'For n ≡ 0, 1, …, 6 the values of n² + n + 1 are 1, 3, 7, 13, 21, 31, 43. Only n ≡ 2 and n ≡ 4 give multiples of 7.\n\n1 to 994 is 142 full blocks of 7, giving 284. 995 to 1000 have remainders 1 to 6, including 2 and 4: 2 more. Total 286.',
        },
        {
          type: 'proof',
          q: 'Prove that the sum of the squares of three consecutive integers is never a perfect square.',
          hint: 'Write the numbers as n − 1, n, n + 1 and look at the sum modulo 3.',
          keySteps: ['(n − 1)² + n² + (n + 1)² = 3n² + 2.', '3n² + 2 ≡ 2 (mod 3).', 'Squares are ≡ 0 or 1 (mod 3), never 2.'],
          solution: 'Let the integers be n − 1, n, n + 1. Then (n − 1)² + n² + (n + 1)² = 3n² + 2 ≡ 2 (mod 3). Every square is ≡ 0 or 1 (mod 3) (since 0² ≡ 0, 1² ≡ 2² ≡ 1). So the sum is never a perfect square.',
        },
      ],
      challenge: {
        source: 'IMO 2005, Problem 4 (above ÖMO level)',
        q: 'The sequence a₁, a₂, … is given by aₙ = 2ⁿ + 3ⁿ + 6ⁿ − 1.\n\nFind all positive integers that are coprime to every term of the sequence, and prove your answer.',
        answers: ['1'],
        keySteps: [
          'Answer: only 1. It is enough to show every prime p divides some term.',
          'p = 2 and p = 3 divide a₂ = 48.',
          'For p ≥ 5 look at a_{p−2}. By Fermat, 2^(p−1) ≡ 3^(p−1) ≡ 6^(p−1) ≡ 1 (mod p).',
          'So 6·a_{p−2} ≡ 3 + 2 + 1 − 6 = 0 (mod p), and since p does not divide 6, p divides a_{p−2}.',
          'Every number greater than 1 has a prime factor, which divides some term, so only 1 is coprime to all terms.',
        ],
        solution: 'We show every prime p divides some aₙ. Then any m > 1 shares a prime factor with some term, so the only answer is 1 (which clearly works).\n\na₂ = 4 + 9 + 36 − 1 = 48, which is divisible by 2 and 3.\n\nLet p ≥ 5. By Fermat’s little theorem 2^(p−1) ≡ 3^(p−1) ≡ 6^(p−1) ≡ 1 (mod p). Multiply a_{p−2} by 6:\n6·a_{p−2} = 3·2^(p−1) + 2·3^(p−1) + 6^(p−1) − 6 ≡ 3 + 2 + 1 − 6 = 0 (mod p).\nSince gcd(p, 6) = 1, p divides a_{p−2}.',
      },
    },
    {
      title: 'Chinese remainder theorem',
      lesson: {
        idea: 'If m and n are coprime, then for any remainders a and b there is a number x with x ≡ a (mod m) and x ≡ b (mod n), and it is unique mod mn. This works for any number of pairwise coprime moduli. It lets you build numbers with many properties at once.',
        steps: ['Write each condition as x ≡ something (mod mᵢ).', 'Check the moduli are pairwise coprime.', 'Combine two conditions at a time, or just say “by CRT such an x exists”.'],
        example: {
          q: 'Find x with x ≡ 1 (mod 4) and x ≡ 2 (mod 9).',
          a: 'Numbers ≡ 2 (mod 9): 2, 11, 20, 29, … The first that is ≡ 1 (mod 4) is 29. All solutions: x ≡ 29 (mod 36).',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'Find the smallest positive integer that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7.',
          answers: ['23'],
          hint: 'Numbers that are ≡ 2 mod 3 and ≡ 2 mod 7 are exactly the numbers ≡ 2 mod 21.',
          solution: 'The first and third conditions say n ≡ 2 (mod 21): n = 2, 23, 44, … The first of these with remainder 3 mod 5 is 23.',
        },
        {
          type: 'answer',
          q: 'What is the remainder when 2²⁰²⁴ is divided by 13?',
          answers: ['9'],
          hint: 'By Fermat, 2¹² ≡ 1 (mod 13).',
          solution: '2¹² ≡ 1 (mod 13) and 2024 = 12·168 + 8, so 2²⁰²⁴ ≡ 2⁸ = 256 = 13·19 + 9. The remainder is 9.',
        },
        {
          type: 'proof',
          q: 'Prove that there are five consecutive positive integers each of which is divisible by a perfect square greater than 1.',
          hint: 'Use the squares 4, 9, 25, 49 and 121 and the Chinese remainder theorem.',
          keySteps: ['We want x + 1, …, x + 5 divisible by 2², 3², 5², 7², 11² respectively.', 'That means x ≡ −1 (mod 4), x ≡ −2 (mod 9), x ≡ −3 (mod 25), x ≡ −4 (mod 49), x ≡ −5 (mod 121).', 'The moduli are pairwise coprime, so by CRT such a positive x exists.'],
          solution: 'We look for x with 4 | x + 1, 9 | x + 2, 25 | x + 3, 49 | x + 4 and 121 | x + 5. These are the congruences x ≡ −1 (mod 4), x ≡ −2 (mod 9), x ≡ −3 (mod 25), x ≡ −4 (mod 49), x ≡ −5 (mod 121). The moduli 4, 9, 25, 49, 121 are pairwise coprime, so by the Chinese remainder theorem there is a positive solution x. Then x + 1, …, x + 5 are five consecutive integers, each divisible by a square greater than 1.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'Prove that for every positive integer n there are n consecutive positive integers none of which is a power of a prime (a number pᵏ with p prime and k ≥ 0 counts as a prime power, including 1).',
        keySteps: [
          'Take 2n different primes p₁, q₁, p₂, q₂, …, pₙ, qₙ.',
          'By CRT choose x with x + i ≡ 0 (mod pᵢqᵢ) for i = 1, …, n (the moduli pᵢqᵢ are pairwise coprime).',
          'Then x + i is divisible by two different primes pᵢ and qᵢ.',
          'A number divisible by two different primes is not a prime power. So x + 1, …, x + n work.',
        ],
        solution: 'Choose 2n distinct primes p₁, q₁, …, pₙ, qₙ. The numbers p₁q₁, …, pₙqₙ are pairwise coprime, so by the Chinese remainder theorem there is a positive integer x with x ≡ −i (mod pᵢqᵢ) for every i = 1, …, n.\n\nThen pᵢ and qᵢ both divide x + i. A prime power pᵏ has only one prime divisor (and 1 has none), so x + i is not a prime power. Hence the n consecutive integers x + 1, …, x + n contain no prime power.',
      },
    },
    {
      title: 'Primes',
      lesson: {
        idea: 'Every integer > 1 is a product of primes in exactly one way. To show something is not prime, find a divisor (often by working mod 3 or by factoring). For infinitely many primes of a special form, copy Euclid: assume there are finitely many, build a number from them, and look at its prime factors.',
        steps: ['Small primes behave differently: check p = 2 and p = 3 separately.', 'Every prime p > 3 is ≡ ±1 (mod 6).', 'To show a number is composite, factor it or find a small divisor.'],
        example: {
          q: 'For which primes p is p + 10 and p + 14 also prime?',
          a: 'Mod 3: if p ≡ 1, then p + 14 ≡ 0; if p ≡ 2, then p + 10 ≡ 0. So 3 divides one of the three numbers, and it must be p = 3 itself: 3, 13, 17 are all prime. Answer: p = 3.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'What is the largest integer that divides p² − 1 for every prime p > 3?',
          answers: ['24'],
          hint: 'p² − 1 = (p − 1)(p + 1). Check divisibility by powers of 2 and by 3, then try p = 5.',
          solution: '(p − 1)(p + 1): two consecutive even numbers, one divisible by 4, so 8 divides it; one of p − 1, p, p + 1 is divisible by 3 and it isn’t p, so 3 divides it. So 24 always divides p² − 1. For p = 5, p² − 1 = 24, so nothing larger works.',
        },
        {
          type: 'answer',
          q: 'How many positive divisors of 360² are smaller than 360 but do not divide 360?',
          answers: ['29'],
          hint: 'Divisors of N = 360² come in pairs d, N/d with one of them below 360.',
          solution: '360 = 2³·3²·5, so 360² = 2⁶·3⁴·5² has 7·5·3 = 105 divisors. Pairing d with 360²/d, exactly (105 − 1)/2 = 52 are below 360. Of those, the divisors of 360 itself (24 in total, 23 below 360) must be removed: 52 − 23 = 29.',
        },
        {
          type: 'proof',
          q: 'Prove that there are infinitely many primes of the form 4k + 3.',
          hint: 'Suppose p₁, …, pₘ are all of them and look at N = 4p₁p₂⋯pₘ − 1.',
          keySteps: ['Assume p₁, …, pₘ are all primes ≡ 3 (mod 4) and let N = 4p₁⋯pₘ − 1 ≡ 3 (mod 4).', 'N is odd, and a product of primes that are all ≡ 1 (mod 4) is ≡ 1 (mod 4).', 'So N has a prime factor q ≡ 3 (mod 4).', 'But no pᵢ divides N (it leaves remainder −1), so q is a new prime of the form 4k + 3. Contradiction.'],
          solution: 'Suppose there are only finitely many primes ≡ 3 (mod 4): p₁, …, pₘ. Let N = 4p₁p₂⋯pₘ − 1. Then N ≡ 3 (mod 4) and N is odd.\n\nAll prime factors of N are odd. If they were all ≡ 1 (mod 4), their product N would be ≡ 1 (mod 4). So N has a prime factor q ≡ 3 (mod 4). But each pᵢ leaves remainder −1 when dividing N, so q is none of the pᵢ. This contradicts the assumption, so there are infinitely many such primes.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'Find all pairs of primes (p, q) for which pᵠ + qᵖ is prime.',
        answers: ['(2,3),(3,2)', '(2, 3), (3, 2)'],
        keySteps: [
          'If p and q are both odd, pᵠ + qᵖ is even and > 2, so not prime. So one of them is 2; and p = q = 2 gives 8.',
          'So consider 2ᵠ + q² with q an odd prime. q = 3 gives 8 + 9 = 17, a prime.',
          'If q > 3: q² ≡ 1 (mod 3) and 2ᵠ ≡ 2 (mod 3) since q is odd, so 3 divides 2ᵠ + q² > 3.',
          'Answer: (2, 3) and (3, 2).',
        ],
        solution: 'If p and q are both odd, then pᵠ + qᵖ is even and greater than 2, so it is not prime. If p = q = 2 we get 8. So exactly one of them is 2; by symmetry let p = 2 and q an odd prime. We need 2ᵠ + q² to be prime.\n\nq = 3: 2³ + 3² = 17, prime.\n\nq > 3: then 3 ∤ q, so q² ≡ 1 (mod 3), and since q is odd, 2ᵠ ≡ (−1)ᵠ ≡ −1 ≡ 2 (mod 3). So 2ᵠ + q² ≡ 0 (mod 3) and it is greater than 3, so not prime.\n\nThe pairs are (2, 3) and (3, 2).',
      },
    },
    {
      title: 'gcd and Euclid’s algorithm',
      lesson: {
        idea: 'gcd(a, b) = gcd(a − b, b) = gcd(a mod b, b). Repeating this is Euclid’s algorithm. It also proves Bézout: there are integers x, y with ax + by = gcd(a, b). To show that two expressions are coprime, subtract clever multiples until you reach a constant.',
        steps: ['Replace the bigger number by its difference (or remainder) with the smaller.', 'For expressions in n, combine them to cancel n.', 'Any common divisor divides every integer combination.'],
        example: {
          q: 'Find gcd(n² + 1, n + 1) for every n.',
          a: 'n² + 1 = (n + 1)(n − 1) + 2, so the gcd equals gcd(n + 1, 2): it is 2 if n is odd and 1 if n is even.',
        },
      },
      problems: [
        {
          type: 'answer',
          q: 'Compute gcd(2³⁰ − 1, 2¹⁸ − 1).',
          answers: ['63'],
          hint: 'gcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a, b) − 1.',
          solution: 'gcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a,b) − 1, and gcd(30, 18) = 6, so the answer is 2⁶ − 1 = 63.',
        },
        {
          type: 'answer',
          q: 'What is the largest possible value of gcd(n² + 1, (n + 1)² + 1) over all positive integers n?',
          answers: ['5'],
          hint: 'Any common divisor d divides the difference 2n + 1. Use it to get rid of n.',
          solution: 'If d divides both, it divides (n + 1)² + 1 − (n² + 1) = 2n + 1. Also 4(n² + 1) = (2n + 1)(2n − 1) + 5, so d divides 5. For n = 2: gcd(5, 10) = 5. The maximum is 5.',
        },
        {
          type: 'proof',
          q: 'Prove that the fraction (21n + 4)/(14n + 3) cannot be reduced for any natural number n.',
          hint: 'Find a combination of 21n + 4 and 14n + 3 that equals 1.',
          keySteps: ['Let d divide both 21n + 4 and 14n + 3.', '3(14n + 3) − 2(21n + 4) = 1.', 'So d divides 1: the gcd is 1 and the fraction is already in lowest terms.'],
          solution: 'Let d be a common divisor of 21n + 4 and 14n + 3. Then d divides 3(14n + 3) − 2(21n + 4) = 42n + 9 − 42n − 8 = 1. So gcd(21n + 4, 14n + 3) = 1 and the fraction cannot be reduced.',
        },
      ],
      challenge: {
        source: 'Olympiad classic',
        q: 'Prove that for all positive integers a and b,\n\ngcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a, b) − 1.',
        keySteps: [
          'For a > b: 2ᵃ − 1 = 2^(a−b)·(2ᵇ − 1) + (2^(a−b) − 1).',
          'So gcd(2ᵃ − 1, 2ᵇ − 1) = gcd(2^(a−b) − 1, 2ᵇ − 1).',
          'The exponents change exactly like in Euclid’s algorithm (a, b) → (a − b, b).',
          'Euclid ends at (gcd(a, b), gcd(a, b)) (or a pair with 0, where 2⁰ − 1 = 0), so the gcd is 2^gcd(a,b) − 1.',
        ],
        solution: 'Let f(a, b) = gcd(2ᵃ − 1, 2ᵇ − 1). For a > b,\n2ᵃ − 1 = 2^(a−b)(2ᵇ − 1) + (2^(a−b) − 1),\nso f(a, b) = f(a − b, b). Also f is symmetric and f(a, a) = 2ᵃ − 1.\n\nThese are exactly the steps of the subtraction form of Euclid’s algorithm on (a, b), which keeps gcd(a, b) unchanged and ends at the pair (g, g) with g = gcd(a, b). Hence f(a, b) = f(g, g) = 2^g − 1.',
      },
    },
    {
      title: 'Mixed review',
      problems: [
        {
          type: 'answer',
          q: 'Find the sum of all integers n for which n² + 19n + 92 is a perfect square.',
          answers: ['-19'],
          hint: 'Set n² + 19n + 92 = m² (m ≥ 0), multiply by 4 and write it as a difference of squares.',
          solution: '4n² + 76n + 368 = 4m² gives (2n + 19)² − (2m)² = −7, so (2m − k)(2m + k) = 7 with k = 2n + 19. The two factors add up to 4m ≥ 0, so they are (1, 7) or (7, 1). This gives k = 3 or −3, so n = −8 or n = −11 (both give 4 = 2²). Sum: −19.',
        },
        {
          type: 'answer',
          q: 'How many integers from 1 to 1000 are divisible by 3 or by 5, but not by 15?',
          answers: ['401'],
          hint: 'Count multiples of 3, of 5 and of 15.',
          solution: 'Multiples of 3: 333. Of 5: 200. Of 15: 66. Divisible by 3 or 5: 333 + 200 − 66 = 467. Removing the 66 multiples of 15: 401.',
        },
        {
          type: 'proof',
          q: 'Prove that 2ⁿ + 1 is never divisible by 7.',
          hint: 'Powers of 2 modulo 7 repeat with period 3.',
          keySteps: ['2³ = 8 ≡ 1 (mod 7), so 2ⁿ mod 7 only takes the values 1, 2, 4.', 'Then 2ⁿ + 1 ≡ 2, 3 or 5 (mod 7).', 'None of these is 0, so 7 never divides 2ⁿ + 1.'],
          solution: 'Since 2³ = 8 ≡ 1 (mod 7), the powers of 2 modulo 7 cycle through 1, 2, 4. Hence 2ⁿ + 1 ≡ 2, 3 or 5 (mod 7), never 0. So 7 never divides 2ⁿ + 1.',
        },
      ],
    },
    {
      title: 'Mock exam',
      problems: [
        {
          type: 'proof',
          area: 'A',
          q: 'Prove that for all real numbers x and y,\n\nx² + y² + 1 ≥ xy + x + y.\n\nWhen does equality hold?',
          keySteps: ['Multiply by 2 and rearrange: 2x² + 2y² + 2 − 2xy − 2x − 2y ≥ 0.', 'The left side equals (x − y)² + (x − 1)² + (y − 1)².', 'A sum of squares is ≥ 0.', 'Equality exactly when x = y = 1.'],
          solution: '2(x² + y² + 1 − xy − x − y) = (x² − 2xy + y²) + (x² − 2x + 1) + (y² − 2y + 1) = (x − y)² + (x − 1)² + (y − 1)² ≥ 0.\n\nEquality holds exactly when x = y, x = 1 and y = 1, i.e. x = y = 1.',
        },
        {
          type: 'proof',
          area: 'N',
          q: 'Find all positive integers n for which n⁴ + 4 is a prime number.',
          answers: ['1'],
          keySteps: ['Sophie Germain identity: n⁴ + 4 = (n² + 2)² − (2n)² = (n² − 2n + 2)(n² + 2n + 2).', 'For n ≥ 2 the smaller factor n² − 2n + 2 = (n − 1)² + 1 ≥ 2, so n⁴ + 4 is composite.', 'n = 1 gives 5, which is prime.', 'Answer: n = 1.'],
          solution: 'n⁴ + 4 = n⁴ + 4n² + 4 − 4n² = (n² + 2)² − (2n)² = (n² − 2n + 2)(n² + 2n + 2).\n\nFor n = 1 this is 1·5 = 5, which is prime.\n\nFor n ≥ 2, n² − 2n + 2 = (n − 1)² + 1 ≥ 2 and n² + 2n + 2 > n² − 2n + 2, so both factors are greater than 1 and n⁴ + 4 is not prime.\n\nSo the only answer is n = 1.',
        },
        {
          type: 'proof',
          area: 'C',
          q: 'Among any 6 people, every two either know each other or don’t.\n\nProve that there are 3 people who all know each other, or 3 people none of whom know each other.',
          keySteps: ['Pick one person A. Of the other 5, at least 3 are in the same relation to A (pigeonhole): say A knows B, C, D (the other case is the same with roles swapped).', 'If two of B, C, D know each other, they form a group of 3 with A.', 'Otherwise B, C, D are 3 people who don’t know each other.'],
          solution: 'Take any person A. Each of the other 5 people either knows A or doesn’t, so by pigeonhole at least 3 of them are in the same relation to A. Suppose A knows B, C and D (if A knows none of three people, swap “know” and “don’t know” in the following).\n\nIf some two of B, C, D know each other, say B and C, then A, B, C all know each other. If no two of B, C, D know each other, then B, C, D are three people none of whom know each other. Either way we are done.',
        },
        {
          type: 'proof',
          area: 'G',
          q: 'In triangle ABC let M be the midpoint of BC.\n\nProve that AM < (AB + AC)/2.',
          keySteps: ['Extend AM beyond M to D with MD = AM.', 'Triangles AMB and DMC are congruent (SAS), so CD = AB. (ABDC is a parallelogram.)', 'In triangle ACD: AD < AC + CD = AC + AB (strict, as A, C, D are not on a line).', 'AD = 2·AM, so AM < (AB + AC)/2.'],
          solution: 'Extend AM beyond M to a point D with MD = AM. Then BM = MC, AM = MD and the vertical angles at M are equal, so triangles AMB and DMC are congruent and CD = AB.\n\nA, C, D are not collinear (otherwise B would lie on line AC too), so the triangle inequality in triangle ACD gives AD < AC + CD = AC + AB. Since AD = 2·AM, we get AM < (AB + AC)/2.',
        },
      ],
    },
  ],
}
