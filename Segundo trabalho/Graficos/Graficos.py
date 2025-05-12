import numpy as np
import matplotlib.pyplot as plt 

# Tamanhos de entrada
n = np.arange(1, 1001)  # de 1 a 1000 elementos

# Funções de complexidade
bubble_sort = n**2 #n**2
selection_sort = n**2 #n**2
merge_sort = n * np.log2(n) #n * np.log2(n)
quick_sort = n**2 #n**2

# Criando o gráfico
plt.figure(figsize=(12, 6))

# Estilos diferenciados para cada algoritmo
plt.plot(n, bubble_sort, label="Bubble Sort (O(n^2))", color="red", linestyle="solid", linewidth=2)
plt.plot(n, selection_sort, label="Selection Sort (O(n^2))", color="blue", linestyle="dashdot", linewidth=2)
plt.plot(n, merge_sort, label="Merge Sort (O(n log n))", color="green", linestyle="solid", linewidth=2)
plt.plot(n, quick_sort, label="Quick Sort (O(n^2))", color="purple", linestyle="dashed", linewidth=2)

# Configurações do gráfico
plt.title("Comparação da Complexidade dos Algoritmos")
plt.xlabel("Tamanho da Entrada (n)")
plt.ylabel("Operações Estimadas")
plt.yscale("log")  # Escala logarítmica para melhor visualização
plt.legend()
plt.grid(True, which="both", linestyle="--", linewidth=0.5)
plt.show()
