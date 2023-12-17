"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/app/shared/components/button";
import { InputComponent } from "@/app/shared/components/input";
import useFormValidation from "@/app/lib/hooks/use-form-validation";

export default function StudentPlansRegister() {
  const router = useRouter();
  const { values, errors, handleChange, handleSubmit, handleBlur } =
    useFormValidation({
      initialValues: {
        planTitle: "",
        durationMonth: "",
        monthlyPrice: 0,
      },
      validationRules: {
        planTitle: { required: true },
        durationMonth: { required: true },
        monthlyPrice: { required: true },
      },
      onSubmit: (values) => {
        console.log("submited form values", values);
      },
    });

  return (
    <>
      <div className="container flex flex-col w-full p-4 mx-auto mt-6 md:items-center md:justify-center md:flex-row md:p-0">
        <h2 className="flex-1 text-3xl font-bold">Cadastro de planos</h2>
        <div className="flex items-center mt-4">
          <Button onClick={() => router.back()}>Voltar</Button>
          <Button onClick={handleSubmit} className="gym__button--primary">
            Salvar
          </Button>
        </div>
      </div>

      <div className="container flex flex-col w-full p-4 mx-auto mt-6 bg-white">
        <form>
          <InputComponent.Root>
            <InputComponent.Label
              className="block py-2 text-sm font-bold uppercase"
              htmlFor="planTitle"
            >
              título do plano
            </InputComponent.Label>
            <InputComponent.Input
              type="text"
              name="planTitle"
              id="planTitle"
              placeholder="Ex: Start"
              value={values.planTitle}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors?.planTitle && (
              <InputComponent.Hint>{errors.planTitle}</InputComponent.Hint>
            )}
          </InputComponent.Root>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="duration-month"
                >
                  duraçao em meses
                </InputComponent.Label>
                <InputComponent.Input
                  type="text"
                  name="durationMonth"
                  id="durationMonth"
                  placeholder="Ex: 1 mês"
                  value={values.durationMonth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.durationMonth && (
                  <InputComponent.Hint>
                    {errors.durationMonth}
                  </InputComponent.Hint>
                )}
              </InputComponent.Root>
            </div>
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="monthlyPrice"
                >
                  preço mensal
                </InputComponent.Label>
                <InputComponent.Input
                  type="number"
                  name="monthlyPrice"
                  id="monthlyPrice"
                  placeholder="Ex: 129,90"
                  value={values.monthlyPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.monthlyPrice && (
                  <InputComponent.Hint>
                    {errors.monthlyPrice}
                  </InputComponent.Hint>
                )}
              </InputComponent.Root>
            </div>
            <div>
              <InputComponent.Root>
                <InputComponent.Label
                  className="block py-2 mt-2 text-sm font-bold uppercase"
                  htmlFor="totalPrice"
                >
                  preço total
                </InputComponent.Label>
                <InputComponent.Input
                  type="number"
                  name="totalPrice"
                  id="totalPrice"
                  placeholder="Ex: 120"
                  disabled
                  value={values.totalPrice}
                  onBlur={handleBlur}
                />
              </InputComponent.Root>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
