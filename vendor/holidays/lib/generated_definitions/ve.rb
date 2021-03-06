# encoding: utf-8
module Holidays
  # This file is generated by the Ruby Holidays gem.
  #
  # Definitions loaded: definitions/ve.yaml
  #
  # All the definitions are available at https://github.com/holidays/holidays
  module VE # :nodoc:
    def self.defined_regions
      [:ve]
    end

    def self.holidays_by_month
      {
                0 => [{:function => "easter(year)", :function_arguments => [:year], :function_modifier => -48, :name => "Lunes Carnaval", :regions => [:ve]},
            {:function => "easter(year)", :function_arguments => [:year], :function_modifier => -47, :name => "Martes Carnaval", :regions => [:ve]},
            {:function => "easter(year)", :function_arguments => [:year], :function_modifier => -3, :name => "Jueves Santo", :regions => [:ve]},
            {:function => "easter(year)", :function_arguments => [:year], :function_modifier => -2, :name => "Viernes Santo", :regions => [:ve]}],
      1 => [{:mday => 1, :name => "Año Nuevo", :regions => [:ve]}],
      4 => [{:mday => 19, :name => "Declaración Independencia", :regions => [:ve]}],
      5 => [{:mday => 1, :name => "Día del Trabajador", :regions => [:ve]}],
      6 => [{:mday => 24, :name => "Aniversario Batalla de Carabobo", :regions => [:ve]}],
      7 => [{:mday => 5, :name => "Día de la Independencia", :regions => [:ve]},
            {:mday => 24, :name => "Natalicio de Simón Bolívar", :regions => [:ve]}],
      10 => [{:mday => 12, :name => "Día de la Resistencia Indígena", :regions => [:ve]}],
      12 => [{:mday => 24, :name => "Víspera de Navidad", :regions => [:ve]},
            {:mday => 25, :name => "Día de Navidad", :regions => [:ve]},
            {:mday => 31, :name => "Víspera de Año Nuevo", :regions => [:ve]}]
      }
    end

    def self.custom_methods
      {
          
      }
    end
  end
end
