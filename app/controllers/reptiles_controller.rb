class ReptilesController < ApplicationController
  before_action do
    if params[:id]
      @reptile = Reptile.find(params[:id])
    end
  end

  def index
    @zoo = Zoo.find(params[:zoo_id])
    @reptiles = @zoo.reptiles
    respond_to do |format|
      format.html
      format.json{ render json: @reptiles, status: :ok }
    end
  end

  def show
    render json: @reptile, status: :ok
  end

end
