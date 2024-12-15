def compara_pe_cuvinte(corect, gresit):
    cuvinte_corecte = corect.split()
    cuvinte_gresite = gresit.split()

    i, j = 0, 0
    diferente = []

    while i < len(cuvinte_corecte) or j < len(cuvinte_gresite):
        if i < len(cuvinte_corecte) and j < len(cuvinte_gresite):
            if cuvinte_corecte[i] != cuvinte_gresite[j]:
                diferente.append({
                    "pozitie_corecta": i,
                    "pozitie_gresita": j,
                    "corect": cuvinte_corecte[i],
                    "gresit": cuvinte_gresite[j],
                })
            i += 1
            j += 1
        elif i < len(cuvinte_corecte):
            diferente.append({
                "pozitie_corecta": i,
                "pozitie_gresita": None,
                "corect": cuvinte_corecte[i],
                "gresit": None,
            })
            i += 1
        elif j < len(cuvinte_gresite):
            diferente.append({
                "pozitie_corecta": None,
                "pozitie_gresita": j,
                "corect": None,
                "gresit": cuvinte_gresite[j],
            })
            j += 1

    return diferente


def main():

    fraza_corecta = "Pe vremea când eram mai tânăr şi mai influenţabil, tata mi-a dat un sfat care de atunci mi-a rămas mereu prezent în minte. —Ori de câte ori ai poftă să critici pe cineva, mi-a spus, ține seama că nu toţi oamenii au avut avantajele de care te-ai bucurat tu."
    fraza_gresita = "Pe vremea cand eram mai tanar si m-ai influenţabil, tata mia dat un sfat care de atunci mi-a rămâs mereu prezent în minte. —Ori de câte ori a-i poftă să vei critica pe cineva, mi-a spus, tine seama că nu toţi oameni au avantajele de care teai bucurat tu."
    diferente = compara_pe_cuvinte(fraza_corecta, fraza_gresita)

    print(diferente)


if __name__ == "__main__":
    main()