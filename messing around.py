import random

def validateTWO(d1, d2, d3):
    unequal = d1 != d2 and d1 != d3 and d2 != d3
    nonZero = d1 != 0 and d2 != 0 and d3 != 0
    return unequal and nonZero

def generateValidTWO():
    for d1 in range(1, 10):
      for d2 in range(1, 10):
        for d3 in range(1, 10):
          if validateTWO(d1, d2, d3):
            yield d1, d2, d3

def validateFOUR(d1, d2, d3, d4):
    unequal = d1 != d2 and d1 != d3 and d1 != d4 and d2 != d3 and d2 != d4 and d3 != d4
    nonZero = d1 != 0 and d2 != 0 and d3 != 0 and d4 != 0
    return unequal and nonZero

def validateSolution(TWO):
    FOUR = int(str(TWO[0]) + str(TWO[1]) + str(TWO[2])) * 2
    print("Testing FOUR with TWO:", FOUR, TWO)
    FOUR = str(FOUR)
    if len(FOUR) != 4: return False
    d1, d2, d3, d4 = int(FOUR[0]), int(FOUR[1]), int(FOUR[2]), int(FOUR[3])
    print("Testing FOUR with FOUR:", FOUR, d1, d2, d3, d4)
    if not validateFOUR(d1, d2, d3, d4): return False
    if d2 != TWO[1]: return False
    testSet = {TWO[0], TWO[1], TWO[2], d1, d2, d3, d4}
    #input(len(testSet))
    if len(testSet) != 6: return False
    return True


if __name__ == "__main__":
  for t1, t2, t3 in generateValidTWO():
    if validateSolution((t1, t2, t3)):
      print("Solution: TWO=", t1, t2, t3)
      input("DONE!")
    