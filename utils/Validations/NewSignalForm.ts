export interface NewSignalSelect {
  label: string;
  value: string | null;
}

interface NewSignalValues {
  instrument: string;
  operation_type: NewSignalSelect;
  market: NewSignalSelect;
  execution_type: NewSignalSelect;
  entry_point: string;
  stop_loss: string;
  take_profit: string;
}

export default function NewSignalFormValidations(values: NewSignalValues) {
  const {
    instrument,
    operation_type,
    market,
    execution_type,
    entry_point,
    stop_loss,
    take_profit,
  } = values;

  let errors: any = {};

  if (instrument.trim() === "") {
    errors.instrument = "Este campo es obligatorio";
  }
  if (!operation_type.value) {
    errors.operation_type = "Este campo es obligatorio";
  }
  if (!market.value) {
    errors.market = "Este campo es obligatorio";
  }
  if (!execution_type.value) {
    errors.execution_type = "Este campo es obligatorio";
  }
  if (entry_point.trim() === "") {
    errors.entry_point = "Este campo es obligatorio";
  }
  if (stop_loss.trim() === "") {
    errors.stop_loss = "Este campo es obligatorio";
  }
  if (take_profit.trim() === "") {
    errors.take_profit = "Este campo es obligatorio";
  }

  return errors;
}
