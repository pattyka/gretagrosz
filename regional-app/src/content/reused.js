// Days whose topic matches lessons written earlier. Every answer was checked by computer.
// Keys are plan days (1–150).
export default {
  1: {
    "lesson": {
      "idea": "Mark every angle you know and keep using a few facts: angles in a triangle add up to 180°, base angles of an isosceles triangle are equal, angles on a straight line add up to 180°, and the exterior angle of a triangle equals the sum of the two opposite interior angles. Call one unknown angle α and write the others in terms of it.",
      "steps": [
        "Draw a big, accurate figure with a ruler and compass.",
        "Mark equal lengths: they give isosceles triangles and equal angles.",
        "Write every angle in terms of the given ones (α, β, γ for the triangle)."
      ],
      "example": {
        "q": "In triangle ABC, ∠A = 50° and ∠B = 60°. The bisector of angle C meets AB at D. Find ∠ADC.",
        "a": "∠C = 70°, so ∠ACD = 35°. In triangle ADC: ∠ADC = 180° − 50° − 35° = 95°."
      },
      "de": [
        [
          "Dreieck",
          "triangle"
        ],
        [
          "Winkel",
          "angle"
        ],
        [
          "gleichschenkelig",
          "isosceles"
        ],
        [
          "Höhenschnittpunkt",
          "orthocentre"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "In triangle ABC, AB = AC and ∠BAC = 40°. The bisector of angle ABC meets AC at D.\n\nFind ∠BDC in degrees.",
        "answers": [
          "75"
        ],
        "hint": "First find ∠ABC and ∠ACB.",
        "solution": "∠ABC = ∠ACB = (180° − 40°)/2 = 70°, so ∠DBC = 35°. In triangle BDC: ∠BDC = 180° − 35° − 70° = 75°."
      },
      {
        "type": "answer",
        "q": "ABCD is a square, and the equilateral triangle ABE is drawn inside it.\n\nFind ∠DEC in degrees.",
        "answers": [
          "150"
        ],
        "hint": "Triangle ADE is isosceles, because AD = AB = AE.",
        "solution": "∠DAE = 90° − 60° = 30°, and AD = AE, so ∠AED = (180° − 30°)/2 = 75°. In the same way ∠BEC = 75°. Around E: ∠DEC = 360° − 60° − 75° − 75° = 150°."
      },
      {
        "type": "proof",
        "q": "Let ABC be an acute triangle with orthocentre H (where the altitudes meet).\n\nProve that ∠BHC = 180° − ∠BAC.",
        "hint": "Use the feet E and F of the altitudes from B and C, and the quadrilateral AFHE.",
        "keySteps": [
          "Let E, F be the feet of the altitudes from B and C. Then ∠AEH = ∠AFH = 90°.",
          "The angles of quadrilateral AFHE add to 360°, so ∠FHE = 180° − ∠A.",
          "∠BHC and ∠FHE are vertical angles, so they are equal."
        ],
        "solution": "Let E and F be the feet of the altitudes from B and C. Since the triangle is acute, they lie on the sides AC and AB, and H lies inside the triangle. In quadrilateral AFHE the angles at F and E are 90°, so ∠FHE = 360° − 90° − 90° − ∠A = 180° − ∠A. The lines BE and CF cross at H, so ∠BHC and ∠FHE are vertical angles and ∠BHC = 180° − ∠A."
      }
    ],
    "challenge": {
      "source": "Langley’s problem (a famous hard angle chase)",
      "q": "In triangle ABC, AB = AC and ∠BAC = 20°. Point D lies on AC with ∠DBC = 60°, and point E lies on AB with ∠ECB = 50°.\n\nFind ∠BDE and prove your answer.",
      "answers": [
        "30"
      ],
      "keySteps": [
        "Answer: 30°. Plain angle chasing is not enough; you need an extra point.",
        "Take F on AC with ∠FBC = 20°. Then ∠BFC = 80° = ∠BCF, so BF = BC.",
        "In triangle BCE, ∠BEC = 50° = ∠BCE, so BE = BC = BF. With ∠EBF = 60°, triangle BEF is equilateral: EF = BF.",
        "In triangle BFD, ∠FBD = 40° and ∠BFD = 100°, so ∠BDF = 40° and FD = FB = FE.",
        "Triangle FDE is isosceles with ∠DFE = 40°, so ∠FDE = 70° and ∠BDE = 70° − 40° = 30°."
      ],
      "solution": "The base angles are ∠B = ∠C = 80°.\n\nLet F be on AC with ∠FBC = 20°. In triangle BFC, ∠BCF = 80° and ∠BFC = 80°, so BF = BC.\n\nIn triangle BCE, ∠EBC = 80° and ∠ECB = 50°, so ∠BEC = 50° and BE = BC. Hence BE = BF and ∠EBF = 60°, so triangle BEF is equilateral and FE = FB.\n\nSince ∠DBC = 60° > 20°, D lies between A and F. In triangle BFD: ∠FBD = 40°, ∠BFD = 100°, so ∠BDF = 40° and FD = FB.\n\nSo FD = FE and ∠DFE = 100° − 60° = 40°. Triangle DFE is isosceles, so ∠FDE = 70°, and ∠BDE = 70° − 40° = 30°."
    }
  },
  3: {
    "lesson": {
      "idea": "A square is never negative: (anything)² ≥ 0, and it is 0 only when the inside is 0. Most regional inequalities can be solved by rewriting “left − right” as a sum of squares. The equality case then falls out for free: every square has to be 0.",
      "steps": [
        "Move everything to one side: you want to show “something ≥ 0”.",
        "Complete the square, or split the expression into squares like (x − y)², (x − 1)².",
        "Equality: set every square to 0 and solve. Always answer “Wann gilt Gleichheit?”"
      ],
      "example": {
        "q": "Prove that a² + b² ≥ 2ab for all real a, b. When does equality hold?",
        "a": "a² + b² − 2ab = (a − b)² ≥ 0. Equality exactly when a = b."
      },
      "de": [
        [
          "Ungleichung",
          "inequality"
        ],
        [
          "Gleichheit",
          "equality"
        ],
        [
          "Man beweise",
          "prove that"
        ],
        [
          "reelle Zahlen",
          "real numbers"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "What is the smallest value of x² − 6x + 13 for real x?",
        "answers": [
          "4"
        ],
        "hint": "Complete the square: x² − 6x + 9 is a square.",
        "solution": "x² − 6x + 13 = (x − 3)² + 4 ≥ 4, with equality at x = 3. The minimum is 4."
      },
      {
        "type": "answer",
        "q": "What is the smallest value of x² + y² − 2x + 4y + 10 for real x and y?",
        "answers": [
          "5"
        ],
        "hint": "Complete the square in x and in y separately.",
        "solution": "x² − 2x + 1 + y² + 4y + 4 + 5 = (x − 1)² + (y + 2)² + 5 ≥ 5, with equality at x = 1, y = −2. The minimum is 5."
      },
      {
        "type": "proof",
        "q": "Prove that for all real numbers x and y,\n\nx² + y² + 1 ≥ xy + x + y.\n\nWhen does equality hold?",
        "hint": "Multiply by 2 and look for three squares.",
        "keySteps": [
          "Multiply by 2: show 2x² + 2y² + 2 − 2xy − 2x − 2y ≥ 0.",
          "This equals (x − y)² + (x − 1)² + (y − 1)².",
          "A sum of squares is ≥ 0.",
          "Equality exactly when x = y = 1."
        ],
        "solution": "2(x² + y² + 1 − xy − x − y) = (x² − 2xy + y²) + (x² − 2x + 1) + (y² − 2y + 1) = (x − y)² + (x − 1)² + (y − 1)² ≥ 0.\n\nEquality holds exactly when all three squares are 0: x = y, x = 1 and y = 1, so x = y = 1."
      }
    ],
    "challenge": {
      "source": "Regional level",
      "q": "Prove that for all real numbers x and y,\n\nx⁴ + y⁴ + 8 ≥ 8xy.\n\nWhen does equality hold?",
      "keySteps": [
        "x⁴ + y⁴ ≥ 2x²y², because x⁴ + y⁴ − 2x²y² = (x² − y²)².",
        "So it is enough to show 2(xy)² + 8 ≥ 8xy.",
        "2(xy)² − 8xy + 8 = 2(xy − 2)² ≥ 0.",
        "Equality needs x² = y² and xy = 2: x = y = √2 or x = y = −√2."
      ],
      "solution": "First, x⁴ + y⁴ − 2x²y² = (x² − y²)² ≥ 0, so x⁴ + y⁴ ≥ 2x²y².\n\nWith t = xy: 2t² + 8 − 8t = 2(t² − 4t + 4) = 2(t − 2)² ≥ 0.\n\nTogether: x⁴ + y⁴ + 8 ≥ 2x²y² + 8 ≥ 8xy.\n\nEquality needs both steps to be equalities: x² = y² and xy = 2. Then x and y have the same sign and x² = 2, so (x, y) = (√2, √2) or (−√2, −√2)."
    }
  },
  6: {
    "lesson": {
      "idea": "gcd(a, b) = gcd(a − b, b) = gcd(a mod b, b). Repeating this is Euclid’s algorithm. It also proves Bézout: there are integers x, y with ax + by = gcd(a, b). To show that two expressions are coprime, subtract clever multiples until you reach a constant.",
      "steps": [
        "Replace the bigger number by its difference (or remainder) with the smaller.",
        "For expressions in n, combine them to cancel n.",
        "Any common divisor divides every integer combination."
      ],
      "example": {
        "q": "Find gcd(n² + 1, n + 1) for every n.",
        "a": "n² + 1 = (n + 1)(n − 1) + 2, so the gcd equals gcd(n + 1, 2): it is 2 if n is odd and 1 if n is even."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "Compute gcd(2³⁰ − 1, 2¹⁸ − 1).",
        "answers": [
          "63"
        ],
        "hint": "gcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a, b) − 1.",
        "solution": "gcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a,b) − 1, and gcd(30, 18) = 6, so the answer is 2⁶ − 1 = 63."
      },
      {
        "type": "answer",
        "q": "What is the largest possible value of gcd(n² + 1, (n + 1)² + 1) over all positive integers n?",
        "answers": [
          "5"
        ],
        "hint": "Any common divisor d divides the difference 2n + 1. Use it to get rid of n.",
        "solution": "If d divides both, it divides (n + 1)² + 1 − (n² + 1) = 2n + 1. Also 4(n² + 1) = (2n + 1)(2n − 1) + 5, so d divides 5. For n = 2: gcd(5, 10) = 5. The maximum is 5."
      },
      {
        "type": "proof",
        "q": "Prove that the fraction (21n + 4)/(14n + 3) cannot be reduced for any natural number n.",
        "hint": "Find a combination of 21n + 4 and 14n + 3 that equals 1.",
        "keySteps": [
          "Let d divide both 21n + 4 and 14n + 3.",
          "3(14n + 3) − 2(21n + 4) = 1.",
          "So d divides 1: the gcd is 1 and the fraction is already in lowest terms."
        ],
        "solution": "Let d be a common divisor of 21n + 4 and 14n + 3. Then d divides 3(14n + 3) − 2(21n + 4) = 42n + 9 − 42n − 8 = 1. So gcd(21n + 4, 14n + 3) = 1 and the fraction cannot be reduced."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "Prove that for all positive integers a and b,\n\ngcd(2ᵃ − 1, 2ᵇ − 1) = 2^gcd(a, b) − 1.",
      "keySteps": [
        "For a > b: 2ᵃ − 1 = 2^(a−b)·(2ᵇ − 1) + (2^(a−b) − 1).",
        "So gcd(2ᵃ − 1, 2ᵇ − 1) = gcd(2^(a−b) − 1, 2ᵇ − 1).",
        "The exponents change exactly like in Euclid’s algorithm (a, b) → (a − b, b).",
        "Euclid ends at (gcd(a, b), gcd(a, b)) (or a pair with 0, where 2⁰ − 1 = 0), so the gcd is 2^gcd(a,b) − 1."
      ],
      "solution": "Let f(a, b) = gcd(2ᵃ − 1, 2ᵇ − 1). For a > b,\n2ᵃ − 1 = 2^(a−b)(2ᵇ − 1) + (2^(a−b) − 1),\nso f(a, b) = f(a − b, b). Also f is symmetric and f(a, a) = 2ᵃ − 1.\n\nThese are exactly the steps of the subtraction form of Euclid’s algorithm on (a, b), which keeps gcd(a, b) unchanged and ends at the pair (g, g) with g = gcd(a, b). Hence f(a, b) = f(g, g) = 2^g − 1."
    }
  },
  10: {
    "lesson": {
      "idea": "Every integer > 1 is a product of primes in exactly one way. To show something is not prime, find a divisor (often by working mod 3 or by factoring). For infinitely many primes of a special form, copy Euclid: assume there are finitely many, build a number from them, and look at its prime factors.",
      "steps": [
        "Small primes behave differently: check p = 2 and p = 3 separately.",
        "Every prime p > 3 is ≡ ±1 (mod 6).",
        "To show a number is composite, factor it or find a small divisor."
      ],
      "example": {
        "q": "For which primes p is p + 10 and p + 14 also prime?",
        "a": "Mod 3: if p ≡ 1, then p + 14 ≡ 0; if p ≡ 2, then p + 10 ≡ 0. So 3 divides one of the three numbers, and it must be p = 3 itself: 3, 13, 17 are all prime. Answer: p = 3."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "What is the largest integer that divides p² − 1 for every prime p > 3?",
        "answers": [
          "24"
        ],
        "hint": "p² − 1 = (p − 1)(p + 1). Check divisibility by powers of 2 and by 3, then try p = 5.",
        "solution": "(p − 1)(p + 1): two consecutive even numbers, one divisible by 4, so 8 divides it; one of p − 1, p, p + 1 is divisible by 3 and it isn’t p, so 3 divides it. So 24 always divides p² − 1. For p = 5, p² − 1 = 24, so nothing larger works."
      },
      {
        "type": "answer",
        "q": "How many positive divisors of 360² are smaller than 360 but do not divide 360?",
        "answers": [
          "29"
        ],
        "hint": "Divisors of N = 360² come in pairs d, N/d with one of them below 360.",
        "solution": "360 = 2³·3²·5, so 360² = 2⁶·3⁴·5² has 7·5·3 = 105 divisors. Pairing d with 360²/d, exactly (105 − 1)/2 = 52 are below 360. Of those, the divisors of 360 itself (24 in total, 23 below 360) must be removed: 52 − 23 = 29."
      },
      {
        "type": "proof",
        "q": "Prove that there are infinitely many primes of the form 4k + 3.",
        "hint": "Suppose p₁, …, pₘ are all of them and look at N = 4p₁p₂⋯pₘ − 1.",
        "keySteps": [
          "Assume p₁, …, pₘ are all primes ≡ 3 (mod 4) and let N = 4p₁⋯pₘ − 1 ≡ 3 (mod 4).",
          "N is odd, and a product of primes that are all ≡ 1 (mod 4) is ≡ 1 (mod 4).",
          "So N has a prime factor q ≡ 3 (mod 4).",
          "But no pᵢ divides N (it leaves remainder −1), so q is a new prime of the form 4k + 3. Contradiction."
        ],
        "solution": "Suppose there are only finitely many primes ≡ 3 (mod 4): p₁, …, pₘ. Let N = 4p₁p₂⋯pₘ − 1. Then N ≡ 3 (mod 4) and N is odd.\n\nAll prime factors of N are odd. If they were all ≡ 1 (mod 4), their product N would be ≡ 1 (mod 4). So N has a prime factor q ≡ 3 (mod 4). But each pᵢ leaves remainder −1 when dividing N, so q is none of the pᵢ. This contradicts the assumption, so there are infinitely many such primes."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "Find all pairs of primes (p, q) for which pᵠ + qᵖ is prime.",
      "answers": [
        "(2,3),(3,2)",
        "(2, 3), (3, 2)"
      ],
      "keySteps": [
        "If p and q are both odd, pᵠ + qᵖ is even and > 2, so not prime. So one of them is 2; and p = q = 2 gives 8.",
        "So consider 2ᵠ + q² with q an odd prime. q = 3 gives 8 + 9 = 17, a prime.",
        "If q > 3: q² ≡ 1 (mod 3) and 2ᵠ ≡ 2 (mod 3) since q is odd, so 3 divides 2ᵠ + q² > 3.",
        "Answer: (2, 3) and (3, 2)."
      ],
      "solution": "If p and q are both odd, then pᵠ + qᵖ is even and greater than 2, so it is not prime. If p = q = 2 we get 8. So exactly one of them is 2; by symmetry let p = 2 and q an odd prime. We need 2ᵠ + q² to be prime.\n\nq = 3: 2³ + 3² = 17, prime.\n\nq > 3: then 3 ∤ q, so q² ≡ 1 (mod 3), and since q is odd, 2ᵠ ≡ (−1)ᵠ ≡ −1 ≡ 2 (mod 3). So 2ᵠ + q² ≡ 0 (mod 3) and it is greater than 3, so not prime.\n\nThe pairs are (2, 3) and (3, 2)."
    }
  },
  16: {
    "lesson": {
      "idea": "If more than n objects go into n boxes, some box gets at least two. More generally, more than k·n objects in n boxes means a box with at least k + 1. The whole skill is choosing clever boxes: remainders, pairs, parts of a shape, chains.",
      "steps": [
        "Decide what the objects are.",
        "Invent boxes so that two objects in one box give what you want.",
        "For a “smallest n” question, also give an example showing n − 1 is not enough."
      ],
      "example": {
        "q": "Show that among any 5 points in a square of side 2, two are at distance at most √2.",
        "a": "Split the square into four 1×1 squares. Two points land in the same one, and they are at most its diagonal √2 apart."
      },
      "de": [
        [
          "Schubfachprinzip",
          "pigeonhole principle"
        ],
        [
          "Man bestimme",
          "determine"
        ],
        [
          "mindestens",
          "at least"
        ],
        [
          "höchstens",
          "at most"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "What is the smallest number of integers you must choose from 1, 2, …, 100 to be sure that two of them add up to 101?",
        "answers": [
          "51"
        ],
        "hint": "Pair the numbers so each pair adds up to 101.",
        "solution": "Boxes {1, 100}, {2, 99}, …, {50, 51}: 50 boxes, so 51 numbers force a pair. 50 is not enough: 1, …, 50."
      },
      {
        "type": "answer",
        "q": "What is the smallest n such that every set of n different numbers from {1, 2, …, 20} contains two numbers where one is twice the other?",
        "answers": [
          "15"
        ],
        "hint": "Group the numbers into chains like 3, 6, 12.",
        "solution": "Chains 1–2–4–8–16, 3–6–12, 5–10–20, 7–14, 9–18 and the single numbers 11, 13, 15, 17, 19. Avoiding doubles you can take at most 3 + 2 + 2 + 1 + 1 + 5 = 14, e.g. 1, 4, 16, 3, 12, 5, 20, 7, 9, 11, 13, 15, 17, 19. So the answer is 15."
      },
      {
        "type": "proof",
        "q": "Prove that among any 5 integers you can always choose 3 whose sum is divisible by 3.",
        "hint": "Sort the integers into boxes by their remainder mod 3.",
        "keySteps": [
          "Boxes: remainders 0, 1, 2.",
          "Three from one box have a sum divisible by 3; so does one from each box (0 + 1 + 2 = 3).",
          "If all three boxes are used, take one from each. Otherwise 5 numbers are in at most 2 boxes, so one box has 3."
        ],
        "solution": "Sort the 5 integers by their remainder mod 3. If all three remainders 0, 1, 2 occur, one number of each kind has sum ≡ 0 + 1 + 2 ≡ 0 (mod 3). Otherwise the 5 numbers use at most 2 remainders, so by pigeonhole some remainder occurs at least 3 times, and three numbers with the same remainder r have sum ≡ 3r ≡ 0 (mod 3)."
      }
    ],
    "challenge": {
      "source": "IMO 1972, Problem 1",
      "q": "Prove that from any set of ten different two-digit numbers (10 to 99) you can choose two disjoint non-empty subsets with the same sum.",
      "keySteps": [
        "There are 2¹⁰ − 1 = 1023 non-empty subsets.",
        "Every subset sum is at most 90 + 91 + … + 99 = 945 < 1023.",
        "By pigeonhole two different subsets A and B have the same sum.",
        "Remove the common elements: sums stay equal, the sets become disjoint and neither is empty."
      ],
      "solution": "There are 1023 non-empty subsets, but each sum is a positive integer at most 945. So two different subsets A ≠ B have the same sum.\n\nRemove the elements they share: A′ = A \\ B and B′ = B \\ A still have equal sums and are disjoint. If A′ were empty, A ⊂ B and B \\ A would have sum 0, impossible since A ≠ B. Likewise B′ is non-empty."
    }
  },
  18: {
    "lesson": {
      "idea": "a ≡ b (mod n) means a and b leave the same remainder when divided by n. You can add, subtract and multiply congruences and take powers. Powers repeat in cycles, so look for a small power that is ≡ 1. And if two numbers are ≡ each other’s negative, their odd powers cancel.",
      "steps": [
        "Reduce everything mod n first.",
        "Find the cycle of the powers: 2, 4, 1, 2, 4, 1, … mod 7.",
        "Use a ≡ −b tricks: 4 ≡ −3 (mod 7)."
      ],
      "example": {
        "q": "Find the remainder of 2¹⁰⁰ when divided by 7.",
        "a": "2³ = 8 ≡ 1 (mod 7). 99 = 3·33, so 2⁹⁹ ≡ 1 and 2¹⁰⁰ ≡ 2."
      },
      "de": [
        [
          "Rest",
          "remainder"
        ],
        [
          "kongruent",
          "congruent"
        ],
        [
          "genau dann, wenn",
          "if and only if"
        ],
        [
          "Teiler",
          "divisor"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "What are the last two digits of 7²⁰²⁴?\n\nType them as a two-digit number, for example 07.",
        "answers": [
          "01",
          "1"
        ],
        "hint": "Compute 7⁴ mod 100.",
        "solution": "7⁴ = 2401 ≡ 1 (mod 100), and 2024 = 4·506, so 7²⁰²⁴ ≡ 1. The last two digits are 01."
      },
      {
        "type": "answer",
        "q": "How many integers n with 1 ≤ n ≤ 1000 make n² + n + 1 divisible by 7?",
        "answers": [
          "286"
        ],
        "hint": "Only n mod 7 matters. Try all 7 remainders.",
        "solution": "n ≡ 0, …, 6 gives 1, 3, 7, 13, 21, 31, 43: only n ≡ 2 and n ≡ 4 work. 1 to 994 is 142 blocks of 7 → 284, and 995 to 1000 add 2 more: 286."
      },
      {
        "type": "proof",
        "q": "Prove that 2ⁿ + 1 is never divisible by 7.",
        "hint": "Powers of 2 mod 7 repeat with period 3.",
        "keySteps": [
          "2³ ≡ 1 (mod 7), so 2ⁿ mod 7 is 1, 2 or 4.",
          "Then 2ⁿ + 1 ≡ 2, 3 or 5 (mod 7).",
          "None of these is 0."
        ],
        "solution": "Since 2³ = 8 ≡ 1 (mod 7), the powers of 2 modulo 7 cycle through 2, 4, 1. So 2ⁿ + 1 ≡ 3, 5 or 2 (mod 7), never 0."
      }
    ],
    "challenge": {
      "source": "Regional level",
      "q": "Find all positive integers n for which 3ⁿ + 4ⁿ is divisible by 7.",
      "answers": [
        "all odd n"
      ],
      "keySteps": [
        "4 ≡ −3 (mod 7), so 3ⁿ + 4ⁿ ≡ 3ⁿ + (−3)ⁿ = 3ⁿ(1 + (−1)ⁿ) (mod 7).",
        "If n is odd this is 3ⁿ·0 ≡ 0: divisible.",
        "If n is even it is 2·3ⁿ, and 7 divides neither 2 nor 3ⁿ: not divisible.",
        "Answer: exactly the odd n."
      ],
      "solution": "Since 4 ≡ −3 (mod 7), 3ⁿ + 4ⁿ ≡ 3ⁿ + (−3)ⁿ = 3ⁿ(1 + (−1)ⁿ) (mod 7).\n\nFor odd n the bracket is 0, so 7 divides 3ⁿ + 4ⁿ.\n\nFor even n we get 2·3ⁿ (mod 7). As 7 is prime and divides neither 2 nor 3, it does not divide 2·3ⁿ.\n\nSo 3ⁿ + 4ⁿ is divisible by 7 exactly when n is odd."
    }
  },
  27: {
    "lesson": {
      "idea": "For non-negative a and b: (a + b)/2 ≥ √(ab), with equality only when a = b. It comes straight from (√a − √b)² ≥ 0. To find a minimum, split the expression into two parts whose product is constant. To find a maximum, make the sum constant. Then check that equality can really happen.",
      "steps": [
        "Look for two terms whose product (or sum) is fixed.",
        "Apply a + b ≥ 2√(ab).",
        "Find when the two terms are equal, and check it is allowed.",
        "Multiplying several AM–GMs together works too, if everything is positive."
      ],
      "example": {
        "q": "Prove that x + 1/x ≥ 2 for x > 0.",
        "a": "x + 1/x ≥ 2√(x · 1/x) = 2, with equality when x = 1/x, i.e. x = 1."
      },
      "de": [
        [
          "positive reelle Zahlen",
          "positive reals"
        ],
        [
          "arithmetisches Mittel",
          "arithmetic mean"
        ],
        [
          "geometrisches Mittel",
          "geometric mean"
        ],
        [
          "Wann gilt Gleichheit?",
          "When does equality hold?"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "What is the smallest value of x + 4/x for x > 0?",
        "answers": [
          "4"
        ],
        "hint": "The product of x and 4/x is constant.",
        "solution": "x + 4/x ≥ 2√(x · 4/x) = 4, with equality when x = 4/x, i.e. x = 2."
      },
      {
        "type": "answer",
        "q": "Positive numbers x and y satisfy 2x + 3y = 12.\n\nWhat is the largest possible value of xy?",
        "answers": [
          "6"
        ],
        "hint": "Apply AM–GM to 2x and 3y.",
        "solution": "12 = 2x + 3y ≥ 2√(6xy), so 6xy ≤ 36 and xy ≤ 6. Equality when 2x = 3y = 6: x = 3, y = 2."
      },
      {
        "type": "proof",
        "q": "Prove that for all positive real numbers a, b, c,\n\n(a + b)(b + c)(c + a) ≥ 8abc.\n\nWhen does equality hold?",
        "hint": "Use AM–GM on each bracket separately and multiply.",
        "keySteps": [
          "a + b ≥ 2√(ab), b + c ≥ 2√(bc), c + a ≥ 2√(ca).",
          "All sides are positive, so we may multiply: product ≥ 8√(a²b²c²) = 8abc.",
          "Equality needs a = b, b = c and c = a: exactly when a = b = c."
        ],
        "solution": "By AM–GM, a + b ≥ 2√(ab), b + c ≥ 2√(bc) and c + a ≥ 2√(ca). All these numbers are positive, so multiplying gives (a + b)(b + c)(c + a) ≥ 8√(a²b²c²) = 8abc.\n\nEquality holds exactly when all three AM–GMs are equalities: a = b, b = c, c = a, i.e. a = b = c."
      }
    ],
    "challenge": {
      "source": "Regional level",
      "q": "Positive real numbers x and y satisfy x + y = 1. Prove that\n\n(1 + 1/x)(1 + 1/y) ≥ 9.\n\nWhen does equality hold?",
      "keySteps": [
        "Expand: (1 + 1/x)(1 + 1/y) = 1 + 1/x + 1/y + 1/(xy).",
        "Use x + y = 1: 1/x + 1/y = (x + y)/(xy) = 1/(xy), so the product is 1 + 2/(xy).",
        "AM–GM: 1 = x + y ≥ 2√(xy), so xy ≤ 1/4 and 2/(xy) ≥ 8.",
        "So the product is ≥ 9, with equality exactly when x = y = 1/2."
      ],
      "solution": "(1 + 1/x)(1 + 1/y) = 1 + 1/x + 1/y + 1/(xy) = 1 + (x + y)/(xy) + 1/(xy) = 1 + 2/(xy), using x + y = 1.\n\nBy AM–GM, 1 = x + y ≥ 2√(xy), so xy ≤ 1/4 and 2/(xy) ≥ 8. Hence the product is at least 9.\n\nEquality needs x = y, so x = y = 1/2 (and then the product is (1 + 2)² = 9)."
    }
  },
  28: {
    "lesson": {
      "idea": "Look for something that never changes, whatever move is made: a sum, a product, whether a number is even or odd, a remainder. If its value at the start differs from its value at the goal, the goal is impossible. If a problem asks for “the last number”, the invariant often gives it directly.",
      "steps": [
        "Try: the sum, the product, the parity, the remainder mod 3.",
        "Check what one move does to it.",
        "Compare start and goal."
      ],
      "example": {
        "q": "A knight starts on a corner of a chessboard and returns to it after some moves. Show that it made an even number of moves.",
        "a": "Every knight move changes the colour of its square. To be back on the same colour, it changed colour an even number of times."
      },
      "de": [
        [
          "Zug",
          "move"
        ],
        [
          "abwechselnd",
          "taking turns"
        ],
        [
          "unabhängig davon",
          "regardless of"
        ],
        [
          "gerade / ungerade",
          "even / odd"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "A frog sits at 0 on the number line. Its k-th jump has length k (1, then 2, then 3, …), and each jump goes left or right.\n\nWhat is the smallest n ≥ 10 such that the frog can be back at 0 right after its n-th jump?",
        "answers": [
          "11"
        ],
        "hint": "Changing the direction of one jump changes the end point by an even number. Compare with 1 + 2 + … + n.",
        "solution": "Turning jump k around changes the end point by 2k, so the end point always has the same parity as 1 + 2 + … + n = n(n + 1)/2.\n\nn = 10: 55 is odd, so 0 is impossible. n = 11: 66 is even and 1 + 2 + 3 + 4 + 5 + 7 + 11 = 33 = 6 + 8 + 9 + 10."
      },
      {
        "type": "answer",
        "q": "The numbers 1, 2, 3, 4, 5, 6 are written on a board. In each step you erase two numbers a and b and write a + b + ab. After 5 steps one number is left.\n\nWhat is it?",
        "answers": [
          "5039"
        ],
        "hint": "Add 1 to a + b + ab. Can you factor it?",
        "solution": "a + b + ab + 1 = (a + 1)(b + 1). So the product of (x + 1) over all numbers on the board never changes: 2·3·4·5·6·7 = 5040. The last number N satisfies N + 1 = 5040, so N = 5039."
      },
      {
        "type": "proof",
        "q": "On an island there are 13 red, 15 green and 17 blue chameleons. When two chameleons of different colours meet, both change to the third colour.\n\nProve that the chameleons can never all have the same colour.",
        "hint": "Look at the differences between the numbers of two colours, modulo 3.",
        "keySteps": [
          "A meeting changes the three counts by (−1, −1, +2) in some order.",
          "So every difference of two counts changes by 0 or ±3: the differences mod 3 never change.",
          "At the start R − G ≡ 1, G − B ≡ 1, R − B ≡ 2 (mod 3), none of them 0.",
          "If all had one colour, two counts would be 0 and their difference ≡ 0. Contradiction."
        ],
        "solution": "Let R, G, B be the numbers of red, green and blue chameleons. A meeting changes (R, G, B) by (−1, −1, +2) in some order, so every difference of two counts changes by 0 or ±3 and stays the same modulo 3.\n\nAt the start R − G ≡ 1, G − B ≡ 1 and R − B ≡ 2 (mod 3). If all chameleons had one colour, the other two counts would both be 0, so their difference would be ≡ 0 (mod 3). That never happens, so it is impossible."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "There are 13 weights, each with a whole number of grams. If you remove any one of them, the other 12 can be split into two groups of 6 with the same total mass.\n\nProve that all 13 weights have the same mass.",
      "keySteps": [
        "All masses have the same parity: removing w leaves an even total, so every w has the parity of the total.",
        "Subtracting the same number from every weight keeps the property (both groups have 6 weights).",
        "Subtract the smallest mass: one weight is 0, so all are even. Halving also keeps the property.",
        "If not all were 0, you could halve forever — impossible (infinite descent). So all were equal."
      ],
      "solution": "Let S be the total. Removing w leaves S − w, which splits into two equal halves, so S − w is even: all weights have the parity of S.\n\nSubtracting c from every weight subtracts 6c from each group, so the property still holds. Subtract the smallest mass: now all masses are ≥ 0 and one is 0, so all are even. Halving them keeps the property.\n\nIf some mass were positive we could repeat this forever, but a positive integer can only be halved finitely often. So after subtracting the smallest mass all weights are 0: all 13 weights were equal."
    }
  },
  36: {
    "lesson": {
      "idea": "Inscribed angles standing on the same arc are equal, and each is half the central angle on that arc. A quadrilateral is cyclic (its corners lie on one circle) exactly when opposite angles add up to 180°, or equivalently when a side is seen from the two other corners under the same angle. Spotting cyclic quadrilaterals is the most important skill in regional geometry.",
      "steps": [
        "Look for equal angles standing on the same segment.",
        "Opposite angles add to 180° ⇔ cyclic.",
        "Once you know four points are concyclic, you get many new equal angles for free."
      ],
      "example": {
        "q": "Triangle ABC is inscribed in a circle with centre O, and ∠BAC = 50°. Find ∠OBC.",
        "a": "∠BOC = 2·50° = 100°. Triangle BOC is isosceles (OB = OC), so ∠OBC = (180° − 100°)/2 = 40°."
      },
      "de": [
        [
          "Umkreis",
          "circumcircle"
        ],
        [
          "Sehnenviereck",
          "cyclic quadrilateral"
        ],
        [
          "Peripheriewinkel",
          "inscribed angle"
        ],
        [
          "Mittelpunkt",
          "centre"
        ]
      ]
    },
    "problems": [
      {
        "type": "answer",
        "q": "ABCD is a convex quadrilateral inscribed in a circle, with ∠ABD = 35° and ∠ACB = 50°.\n\nFind ∠BCD in degrees.",
        "answers": [
          "85"
        ],
        "hint": "∠ACD and ∠ABD stand on the same arc AD.",
        "solution": "∠ACD = ∠ABD = 35° (same arc AD). Since CA lies inside angle BCD, ∠BCD = 50° + 35° = 85°."
      },
      {
        "type": "answer",
        "q": "ABCD is a quadrilateral inscribed in a circle, and ∠DAB = 2·∠BCD.\n\nFind ∠BCD in degrees.",
        "answers": [
          "60"
        ],
        "hint": "Opposite angles of a cyclic quadrilateral add up to 180°.",
        "solution": "∠DAB + ∠BCD = 180°, so 3·∠BCD = 180° and ∠BCD = 60°."
      },
      {
        "type": "proof",
        "q": "Let ABC be an acute triangle with orthocentre H.\n\nProve that the reflection of H in the line BC lies on the circumcircle of triangle ABC.",
        "hint": "You already know ∠BHC = 180° − ∠A (day 2). What happens to that angle under the reflection?",
        "keySteps": [
          "∠BHC = 180° − ∠A (feet of the altitudes and quadrilateral AFHE).",
          "Let H′ be the reflection of H in BC. Reflection keeps angles, so ∠BH′C = 180° − ∠A.",
          "A and H′ lie on opposite sides of BC.",
          "So ∠A + ∠BH′C = 180°: ABH′C is cyclic and H′ lies on the circumcircle."
        ],
        "solution": "Let E and F be the feet of the altitudes from B and C. In quadrilateral AFHE the angles at E and F are 90°, so ∠FHE = 180° − ∠A, and ∠BHC = ∠FHE (vertical angles).\n\nLet H′ be the reflection of H in BC. Triangles BHC and BH′C are congruent, so ∠BH′C = 180° − ∠A. In an acute triangle H lies inside, so H′ lies on the other side of BC from A. Thus in quadrilateral ABH′C the opposite angles at A and H′ add up to 180°, so it is cyclic: H′ lies on the circumcircle."
      }
    ],
    "challenge": {
      "source": "A key lemma for regional geometry",
      "q": "Let I be the incentre of triangle ABC (where the angle bisectors meet). The bisector of angle A meets the circumcircle of ABC again at M.\n\nProve that MB = MC = MI.",
      "keySteps": [
        "MB = MC: ∠BAM = ∠MAC, so the chords MB and MC stand on equal inscribed angles and are equal.",
        "∠MBI = ∠MBC + ∠CBI = ∠MAC + β/2 = α/2 + β/2 (inscribed angles on arc MC).",
        "∠MIB is an exterior angle of triangle ABI, so ∠MIB = ∠BAI + ∠ABI = α/2 + β/2.",
        "So triangle MBI is isosceles with MB = MI."
      ],
      "solution": "Write α, β for the angles at A and B.\n\nSince AM bisects angle A, ∠BAM = ∠MAC = α/2. Equal inscribed angles stand on equal chords, so MB = MC.\n\nAngle at B: ∠MBC = ∠MAC = α/2 (both stand on arc MC), and ∠CBI = β/2 because BI bisects angle B. So ∠MBI = α/2 + β/2.\n\nAngle at I: I lies on segment AM, so ∠MIB is an exterior angle of triangle ABI: ∠MIB = ∠IAB + ∠ABI = α/2 + β/2.\n\nThus ∠MBI = ∠MIB, so triangle MBI is isosceles and MB = MI. Together: MB = MC = MI."
    }
  },
  39: {
    "lesson": {
      "idea": "Colour the board (like a chessboard, in stripes, or along diagonals with k colours) so that every piece or move treats the colours in a fixed way. Then count each colour: if the numbers don’t fit, the tiling or movement is impossible. Colourings also help build constructions.",
      "steps": [
        "Try the chessboard colouring first.",
        "For 1×k pieces, colour with k colours so every piece covers each colour once: colour (row + column) mod k.",
        "Count the cells of each colour and compare."
      ],
      "example": {
        "q": "Remove two opposite corners from a chessboard. Can the remaining 62 squares be covered by 31 dominoes?",
        "a": "Both removed corners have the same colour, so 32 squares of one colour and 30 of the other remain. Every domino covers one of each colour, so 31 dominoes would need 31 of each. Impossible."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "There is a beetle on every cell of a 5×5 board. At a whistle every beetle crawls to a cell sharing a side with its own. Several beetles may end up in the same cell.\n\nWhat is the smallest possible number of empty cells afterwards?",
        "answers": [
          "1"
        ],
        "hint": "Colour the board like a chessboard. Which colour has more cells, and where can beetles on it come from?",
        "solution": "With a chessboard colouring there are 13 black cells (including the corners) and 12 white. Every beetle changes colour, so the black cells afterwards only receive the 12 beetles from white cells: at least one black cell is empty.\n\n1 is possible: cover the board except one corner with 12 dominoes. The two beetles in each domino swap places, and the corner beetle moves to a neighbour."
      },
      {
        "type": "answer",
        "q": "What is the smallest number of cells you must mark on an 8×8 board so that every 1×4 rectangle (horizontal or vertical) contains at least one marked cell?",
        "answers": [
          "16"
        ],
        "hint": "First find 16 rectangles that don’t overlap. Then try marking cells along diagonals.",
        "solution": "The board can be cut into 16 non-overlapping 1×4 rectangles, and each needs its own mark, so at least 16.\n\n16 is enough: mark the cells with (row + column) ≡ 3 (mod 4). There are 16 of them, and any 4 consecutive cells in a row or column contain all four remainders, so one is marked."
      },
      {
        "type": "proof",
        "q": "Prove that a 10×10 board cannot be covered by 1×4 strips (each strip covers exactly 4 cells in a row or in a column, without overlaps).",
        "hint": "Colour cell (r, c) with (r + c) mod 4 and count each colour.",
        "keySteps": [
          "Colour cell (r, c) with (r + c) mod 4.",
          "Every 1×4 strip, horizontal or vertical, covers each of the 4 colours exactly once.",
          "25 strips would cover exactly 25 cells of each colour.",
          "Counting gives 25, 24, 25, 26 cells of colours 0, 1, 2, 3, which is not 25 each."
        ],
        "solution": "Colour cell (r, c) (1 ≤ r, c ≤ 10) with (r + c) mod 4. Four consecutive cells in a row or column have four consecutive values of r + c, so a strip covers each colour exactly once. A covering would use 25 strips and so cover exactly 25 cells of each colour.\n\nBut there are 25 cells of colour 0, 24 of colour 1, 25 of colour 2 and 26 of colour 3. So no covering exists."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "A 7×7 board is covered by sixteen 1×3 strips and one 1×1 square.\n\nProve that the 1×1 square lies in one of the 9 cells whose row and column are both 1, 4 or 7 (rows and columns numbered 1 to 7).",
      "keySteps": [
        "Colour cell (r, c) with (r + c) mod 3. Every 1×3 strip covers each colour once.",
        "Count: colour 2 appears 17 times, the others 16 times, so the single square must have r + c ≡ 2 (mod 3).",
        "Do the same with (r − c) mod 3: colour 0 appears 17 times, so r − c ≡ 0 (mod 3).",
        "Together: 2r ≡ 2, so r ≡ c ≡ 1 (mod 3), i.e. r, c ∈ {1, 4, 7}."
      ],
      "solution": "Colour cell (r, c) with (r + c) mod 3. Three consecutive cells in a row or column have three consecutive values of r + c, so each strip covers one cell of each colour, and the 16 strips cover 16 cells of each colour. Counting the board: colour 0 has 16 cells, colour 1 has 16 and colour 2 has 17. So the single square has colour 2: r + c ≡ 2 (mod 3).\n\nNow colour with (r − c) mod 3. Again every strip covers each colour once. Here colour 0 has 17 cells and the others 16, so r − c ≡ 0 (mod 3).\n\nAdding: 2r ≡ 2, so r ≡ 1 (mod 3), and then c ≡ r ≡ 1. Hence r, c ∈ {1, 4, 7}."
    }
  },
  51: {
    "lesson": {
      "idea": "In a game where the player who can’t move loses, find the losing positions: positions where every move leads to a winning position for the opponent. Work backwards from the end. Two great tricks: symmetry (copy your opponent’s move in a mirror) and strategy stealing (if the second player had a winning strategy, the first could use it).",
      "steps": [
        "Play small cases and mark positions as winning (W) or losing (L).",
        "L: every move goes to W. W: some move goes to L.",
        "Look for a pattern, then prove it.",
        "For two-player board games try a symmetric strategy."
      ],
      "example": {
        "q": "Two players take turns removing 1, 2 or 3 stones from a pile of 2024. Whoever takes the last stone wins. Who wins?",
        "a": "Multiples of 4 are losing: from 4k you can only reach 4k − 1, 4k − 2, 4k − 3, and from those the opponent goes back to a multiple of 4. 2024 = 4·506, so the second player wins by always making the total of each round 4."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "Two players take turns removing 1, 3 or 4 stones from a pile. Whoever takes the last stone wins.\n\nFor how many starting sizes n with 1 ≤ n ≤ 100 does the second player win?",
        "answers": [
          "29"
        ],
        "hint": "Work out W/L for n = 0, 1, 2, … up to 14 and look for a pattern.",
        "solution": "Working backwards, the losing positions are n ≡ 0 or 2 (mod 7): 0, 2, 7, 9, 14, 16, … From these, removing 1, 3 or 4 always lands on a winning position, and from every other n there is a move to one of them.\n\nBetween 1 and 100 there are 14 multiples of 7 and 15 numbers ≡ 2 (mod 7) (2, 9, …, 100): 29 in total."
      },
      {
        "type": "answer",
        "q": "Nim: there are three piles with 3, 5 and 7 stones. A move removes any positive number of stones from one pile. Whoever takes the last stone wins.\n\nThe first player can win. How many different first moves win?",
        "answers": [
          "3"
        ],
        "hint": "Write the pile sizes in binary and XOR them. Winning moves make the XOR 0.",
        "solution": "3 ⊕ 5 ⊕ 7 = 011 ⊕ 101 ⊕ 111 = 001. A winning move makes the XOR 0: change a pile p to p ⊕ 1 if that is smaller. 3 → 2, 5 → 4 and 7 → 6 all work, so there are 3 winning first moves."
      },
      {
        "type": "proof",
        "q": "Two players take turns placing dominoes on an 8×8 board. Each domino covers two cells sharing a side, and dominoes may not overlap. The player who cannot move loses.\n\nProve that the second player can always win.",
        "hint": "Mirror your opponent through the centre of the board.",
        "keySteps": [
          "Strategy: answer every domino with its mirror image through the centre of the board.",
          "After each of the second player’s moves, the position is symmetric about the centre.",
          "The mirror image is always free: it was free before the opponent’s move by symmetry, and the new domino can’t overlap its own mirror image (no cell is its own mirror image, and no domino contains a cell and its mirror image).",
          "So the second player can always move, and the first player is the one who gets stuck."
        ],
        "solution": "The second player answers each move by placing the domino symmetric to it with respect to the centre of the board.\n\nAfter every move of the second player the covered cells are symmetric. When the first player places a domino D, its mirror D′ was free before (by symmetry, since D was free). Could D′ overlap D? A cell and its mirror image are never the same cell (the centre is a corner point, not a cell), and they are never neighbours: neighbouring cells have centres at distance 1 whose midpoint is the middle of an edge, not the centre of the board. So D and D′ are disjoint and D′ is a legal move.\n\nThus the second player always has a move, the game is finite, so the first player is the one who eventually cannot move."
      }
    ],
    "challenge": {
      "source": "Olympiad classic (strategy stealing)",
      "q": "The numbers 1, 2, …, n (n ≥ 2) are written on a board. Two players take turns. A move: choose one of the remaining numbers and erase it together with all its divisors that are still on the board. The player who erases the last number wins.\n\nProve that the first player has a winning strategy (even though we don’t know what it is!).",
      "keySteps": [
        "The game always ends, so one of the players has a winning strategy.",
        "Suppose the second player has one. Consider the first move “erase 1”.",
        "The second player then has a winning reply: erase some x (together with its divisors).",
        "But erasing x at the very start leads to exactly the same position (1 divides x), so the first player could have played x first and then followed the second player’s strategy. Contradiction, so the first player wins."
      ],
      "solution": "The game is finite and has no draws, so exactly one player has a winning strategy.\n\nSuppose it is the second player. Then whatever the first player does, the second player can win. In particular, if the first player starts by erasing just the number 1, the second player has a winning answer: erase some number x and its divisors, reaching a position P from which the second player (now “the player who just moved”) wins.\n\nBut the first player could have erased x right at the start: since 1 divides x, this erases exactly the same numbers and reaches the same position P. Then the first player is in the winning role. This contradicts the assumption, so the first player has a winning strategy."
    }
  },
  69: {
    "lesson": {
      "idea": "If m and n are coprime, then for any remainders a and b there is a number x with x ≡ a (mod m) and x ≡ b (mod n), and it is unique mod mn. This works for any number of pairwise coprime moduli. It lets you build numbers with many properties at once.",
      "steps": [
        "Write each condition as x ≡ something (mod mᵢ).",
        "Check the moduli are pairwise coprime.",
        "Combine two conditions at a time, or just say “by CRT such an x exists”."
      ],
      "example": {
        "q": "Find x with x ≡ 1 (mod 4) and x ≡ 2 (mod 9).",
        "a": "Numbers ≡ 2 (mod 9): 2, 11, 20, 29, … The first that is ≡ 1 (mod 4) is 29. All solutions: x ≡ 29 (mod 36)."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "Find the smallest positive integer that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7.",
        "answers": [
          "23"
        ],
        "hint": "Numbers that are ≡ 2 mod 3 and ≡ 2 mod 7 are exactly the numbers ≡ 2 mod 21.",
        "solution": "The first and third conditions say n ≡ 2 (mod 21): n = 2, 23, 44, … The first of these with remainder 3 mod 5 is 23."
      },
      {
        "type": "answer",
        "q": "What is the remainder when 2²⁰²⁴ is divided by 13?",
        "answers": [
          "9"
        ],
        "hint": "By Fermat, 2¹² ≡ 1 (mod 13).",
        "solution": "2¹² ≡ 1 (mod 13) and 2024 = 12·168 + 8, so 2²⁰²⁴ ≡ 2⁸ = 256 = 13·19 + 9. The remainder is 9."
      },
      {
        "type": "proof",
        "q": "Prove that there are five consecutive positive integers each of which is divisible by a perfect square greater than 1.",
        "hint": "Use the squares 4, 9, 25, 49 and 121 and the Chinese remainder theorem.",
        "keySteps": [
          "We want x + 1, …, x + 5 divisible by 2², 3², 5², 7², 11² respectively.",
          "That means x ≡ −1 (mod 4), x ≡ −2 (mod 9), x ≡ −3 (mod 25), x ≡ −4 (mod 49), x ≡ −5 (mod 121).",
          "The moduli are pairwise coprime, so by CRT such a positive x exists."
        ],
        "solution": "We look for x with 4 | x + 1, 9 | x + 2, 25 | x + 3, 49 | x + 4 and 121 | x + 5. These are the congruences x ≡ −1 (mod 4), x ≡ −2 (mod 9), x ≡ −3 (mod 25), x ≡ −4 (mod 49), x ≡ −5 (mod 121). The moduli 4, 9, 25, 49, 121 are pairwise coprime, so by the Chinese remainder theorem there is a positive solution x. Then x + 1, …, x + 5 are five consecutive integers, each divisible by a square greater than 1."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "Prove that for every positive integer n there are n consecutive positive integers none of which is a power of a prime (a number pᵏ with p prime and k ≥ 0 counts as a prime power, including 1).",
      "keySteps": [
        "Take 2n different primes p₁, q₁, p₂, q₂, …, pₙ, qₙ.",
        "By CRT choose x with x + i ≡ 0 (mod pᵢqᵢ) for i = 1, …, n (the moduli pᵢqᵢ are pairwise coprime).",
        "Then x + i is divisible by two different primes pᵢ and qᵢ.",
        "A number divisible by two different primes is not a prime power. So x + 1, …, x + n work."
      ],
      "solution": "Choose 2n distinct primes p₁, q₁, …, pₙ, qₙ. The numbers p₁q₁, …, pₙqₙ are pairwise coprime, so by the Chinese remainder theorem there is a positive integer x with x ≡ −i (mod pᵢqᵢ) for every i = 1, …, n.\n\nThen pᵢ and qᵢ both divide x + i. A prime power pᵏ has only one prime divisor (and 1 has none), so x + i is not a prime power. Hence the n consecutive integers x + 1, …, x + n contain no prime power."
    }
  },
  71: {
    "lesson": {
      "idea": "A monovariant is a quantity that only ever moves in one direction: every move makes it strictly smaller (or larger). If it is a whole number with a lower bound, it can only decrease finitely often, so the process must stop. Counting how much it changes per move also bounds the number of moves.",
      "steps": [
        "Look for something that “gets better” with each move: a sum of squares, a number of bad pairs, a distance.",
        "Show it changes strictly, by at least some fixed amount.",
        "Use the bound: it can’t go below 0 (or above the maximum)."
      ],
      "example": {
        "q": "Some coins lie in a row, each heads or tails. A move: pick an H directly followed by a T and replace “HT” by “TH”. Show that you can only make finitely many moves.",
        "a": "Count the pairs (H, T) where the H is somewhere left of the T. Each move removes one such pair and creates no new one, so this whole number strictly decreases. It can’t go below 0, so the process stops."
      }
    },
    "problems": [
      {
        "type": "answer",
        "q": "On an island there are 13 red, 15 green and 16 blue chameleons. When two chameleons of different colours meet, both change to the third colour.\n\nWhat is the smallest number of meetings after which all chameleons are green?",
        "answers": [
          "16"
        ],
        "hint": "Watch red + blue. How does each kind of meeting change it?",
        "solution": "A red–blue meeting lowers red + blue by 2. Any other meeting raises red + blue by 1. Red + blue starts at 29 and must reach 0.\n\nWith a red–blue meetings and b others: 2a − b = 29, so b = 2a − 29 ≥ 0, giving a ≥ 15 and a + b = 3a − 29 ≥ 16.\n\n16 is possible: one green–blue meeting gives 15 red, 14 green, 15 blue, then 15 red–blue meetings turn everyone green."
      },
      {
        "type": "answer",
        "q": "The numbers 1, 2, …, 10 are on a board. A move: choose two numbers a < b with b − a ≥ 2 and replace them by a + 1 and b − 1.\n\nWhat is the largest number of moves you can make?",
        "answers": [
          "40"
        ],
        "hint": "What does a move do to the sum of the squares of all numbers? What does the board look like when no move is possible?",
        "solution": "The sum stays 55. A move changes the sum of squares by (a + 1)² + (b − 1)² − a² − b² = −2(b − a − 1) ≤ −2.\n\nWhen no move is possible, all numbers differ by at most 1, so they are five 5s and five 6s with sum of squares 305. At the start it is 385. So there are at most (385 − 305)/2 = 40 moves. 40 is reached by a suitable order of moves that always uses two numbers with b − a = 2 (each such move lowers the sum of squares by exactly 2)."
      },
      {
        "type": "proof",
        "q": "The numbers 1, 2, …, 10 are on a board. A move: choose two numbers a < b with b − a ≥ 2 and replace them by a + 1 and b − 1.\n\nProve that, however you play, you can only make finitely many moves.",
        "hint": "Find a whole number that strictly decreases with every move.",
        "keySteps": [
          "Consider the sum of the squares of all numbers.",
          "A move changes it by −2(b − a − 1), which is at most −2 because b − a ≥ 2.",
          "It is a positive whole number, so it can only decrease finitely many times."
        ],
        "solution": "Let Q be the sum of the squares of the numbers on the board. A move replaces a² + b² by (a + 1)² + (b − 1)² = a² + b² + 2a − 2b + 2, so Q changes by −2(b − a − 1) ≤ −2. Q is always a positive integer, so it can decrease only finitely many times. Hence the process stops."
      }
    ],
    "challenge": {
      "source": "Olympiad classic",
      "q": "In a club every member has at most 3 enemies in the club (being enemies is mutual).\n\nProve that the members can be split into two groups so that everyone has at most one enemy in their own group.",
      "keySteps": [
        "Start with any split, and let E be the number of enemy pairs inside the same group.",
        "If someone has at least 2 enemies in their own group, they have at most 1 in the other group.",
        "Moving that person to the other group lowers E by at least 1.",
        "E is a non-negative whole number, so this stops — and then everyone has at most one enemy in their own group."
      ],
      "solution": "Split the members into two groups in any way, and let E be the number of pairs of enemies who are in the same group.\n\nIf some member X has at least 2 enemies in their own group, then X has at most 3 − 2 = 1 enemy in the other group. Move X to the other group: the enemy pairs inside groups involving X go from at least 2 to at most 1, and no other pair changes. So E decreases by at least 1.\n\nRepeat this while possible. E is a non-negative integer, so it can only decrease finitely many times. When we have to stop, no member has 2 or more enemies in their own group, which is what we wanted."
    }
  },
}
